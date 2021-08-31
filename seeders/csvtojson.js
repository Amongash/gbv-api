const fs = require("fs");
const csvtojson = require("csvtojson");
const csv = require("fast-csv");
const path = require("path");
const { post } = require("../services/case.service");

const files = {
	2019: "../data/2019.csv",
	2020: "../data/2020.csv",
	2021: "../data/2021.csv",
};

populateData()
	.then((res) => {
		console.log(res);
		// process.exit();
	})
	.catch((err) => console.error(err));

async function populateData() {
	for (const file in files) {
		const filepath = path.resolve(__dirname, files[file]);
		await generateData(filepath).catch((err) => Promise.reject(err));
	}
	return Promise.resolve(true);
}

async function generateData(filepath) {
	let stream = fs.createReadStream(filepath);
	let csvStream = csv
		.parse({
			skipRows: 1, // skip header row
			// maxRows: 1,
		})
		.on("data", async function (data) {
			let entry = {
				victim: {
					name: data[1],
					gender: data[2],
					age: await age(data[3]),
					occupation: data[4],
				},
				perpetrator: {
					name: data[6],
					suicide_attempt: await suicide_attempt(data[7]),
					age: await age(data[8]),
					gender: data[9],
					history_of_violence: await history_of_violence(data[15]),
				},
				death: {
					weapon_used: data[10],
					nature_of_death: data[11],
				},
				location: {
					county: data[0],
				},
				source: {
					date_reported: data[5],
					summary: data[13],
					website: data[14],
				},
				status: data[12],
			};

			await generateSchemaData(entry)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		})
		.on("error", function (error) {
			console.error(error);
		})
		.on("end", function () {});

	stream.pipe(csvStream);
}

async function generateSchemaData(csvData) {
	return await post(csvData)
		.then((res) => res)
		.catch((err) => err);
}

async function history_of_violence(value) {
	if (
		value === null ||
		value === undefined ||
		value === "" ||
		value.toLowerCase() === "not reported"
	) {
		return false;
	}
	return true;
}

async function suicide_attempt(value) {
	if (
		value === null ||
		value === undefined ||
		value === "" ||
		value.toLowerCase() === "no"
	) {
		return false;
	}
	return true;
}

async function age(value) {
	if (
		value === null ||
		value === undefined ||
		value === "" ||
		value.toLowerCase() === "not reported" ||
		value.toLowerCase() === "unknown"
	) {
		return 0;
	}
	return parseInt(value);
}
