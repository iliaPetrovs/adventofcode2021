import fs from "fs";
import readline from "readline";

async function getData() {
  let binaryOutput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let gammaArray = [];
  let epsilonArray = [];

  const fileStream = fs.createReadStream("data/day3.txt");

  const rl = readline.createInterface({
    input: fileStream,
  });

  for await (const line of rl) {
    for (let i = 0; i < line.length; i++) {
      if (parseInt(line.slice(i, i + 1)) == 1) binaryOutput[i]++;
    }
  }
  binaryOutput.map((item, index) => {
    if (item >= 500) {
        gammaArray[index] = 1;
        epsilonArray[index] = 0;
    } else {
        gammaArray[index] = 0;
        epsilonArray[index] = 1;
    }
  });
  console.log(returnDecimalFromTwoBinaryArrays(gammaArray, epsilonArray));
}

const returnDecimalFromTwoBinaryArrays = (gamma, epsilon) => {
    return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
}

getData();
