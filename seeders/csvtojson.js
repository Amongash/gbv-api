const fs = require("fs");
const csvtojson = require("csvtojson");
const csv = require("fast-csv");
const path = require("path");
const { post } = require("../services/victim.service");

const files = {
	2019: "../../data/2019.csv",
	// 2020: "../../data/2020.csv",
	// 2021: "../../data/2021.csv",
};

for (const file in files) {
	try {
		const filepath = path.resolve(__dirname, files[file]);
		generateData(filepath);
	} catch (error) {
		console.log(error);
	}
}

function generateData(filepath) {
	let stream = fs.createReadStream(filepath);
	let csvData = [];
	let csvStream = csv
		.parse({
			skipRows: 1, // skip header row
			// maxRows:1
		})
		.on("data", async function (data) {
			let entry = {
				county: data[0],
				victim: data[1],
				gender: data[2],
				age: data[3],
				occupation: data[4],
				date_reported: data[5],
				perpetrator: data[6],
				suicide_attempt: data[7],
				perpetrator_age: data[8],
				perpetrator_gender: data[9],
				weapon_used: data[10],
				nature_of_death: data[11],
				case: data[12],
				summary: data[13],
				source: data[14],
				history_of_violence: data[15],
			};

			let victim = await generateSchemaData(entry);
			if (victim instanceof Error) console.error(`Error: ${victim}`);
			console.log(victim);
			csvData.push(victim);
		})
		.on("error", function (error) {
			console.error(error);
		})
		.on("end", function () {
			// console.log(csvData);
		});
	stream.pipe(csvStream);
}

async function generateSchemaData(jsonData) {
	const victim = {
		name: jsonData.victim,
		age: !isNaN(jsonData.age) ? jsonData.age : 0,
		gender: jsonData.gender,
		occupation: jsonData.occupation,
	};

	const entry = await post(victim)
		.then((res) => res)
		.catch((err) => err);
	return entry;
	// TODO: create functions to sort data into their appropriate schemas
}
