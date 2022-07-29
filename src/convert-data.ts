import fs from "fs";
import {BillValues, DataSource, RoofVariant} from "./types";

console.log("Preparing data source");

const content =
  fs
    .readFileSync('./data.csv', 'utf8')
    .split('\r\n')
    .map((line: string) => line
      .replace(
        /"[0-9,]+ Ft"/g,
        (m) => m.replace(/[,"]/g, '').replace(' Ft', '')
      )
    )
    .map((line: string) => line.split(','))
    .filter((line: string[]) => line.length > 1)


const dataLines = content.slice(5);

const result: DataSource = [];

let currentBill: BillValues = 6000;
let currentRoof: RoofVariant = 'tilted';
let currentYearlyKWH: number = 0;

dataLines.forEach((line: string[], index) => {
  // if (Number(line[0]) % 500 === 0) {
  //   currentBill = Number(line[0]) as BillValues;
  // }

  if (index % 3 === 0) {
    if (index > 0) {
      currentBill = Number(currentBill + 500) as BillValues;
    }
    currentYearlyKWH = Number(dataLines[index + 2][0]);

    // console.log('currentBill', currentBill)
    // console.log('currentYearlyKWH', currentYearlyKWH)
  }

  switch (line[1]) {
    case 'ferde':
      currentRoof = 'tilted';
      break;
    case 'lapos':
      currentRoof = 'flat';
      break;
    case 'földön':
      currentRoof = 'ground';
      break;
  }

  // north
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'north',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[2]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[3]),
    }
  });

  // north-east
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'north-east',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[4]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[5]),
    }
  });

  // east
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'east',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[6]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[7]),
    }
  });

  // south-east
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'south-east',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[8]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[9]),
    }
  });

  // south
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'south',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[10]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[11]),
    }
  });

  // south-west
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'south-west',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[12]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[13]),
    }
  });

  // west
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'west',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[14]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[15]),
    }
  });

  // north-west
  result.push({
    bill: currentBill,
    roof: currentRoof,
    orientation: 'north-west',
    results: {
      emission: Number(line[19]),
      trees: Number(line[20]),
      kwp: Number(line[16]),
      yearlyKWH: currentYearlyKWH,
      price: Number(line[17]),
    }
  });

});


// console.log(content[3]);
// console.log(content[4]);
// console.log(dataLines[0]);
// console.log(result.slice(0, 6))

fs.writeFileSync('./public/data.json', JSON.stringify(result, null, 2), 'utf8');

console.log("Created data source");

// const a = ``.split('\n').map(s => s.split('\t'));
// console.log(JSON.stringify(a, null, 2));
