import fs from "fs";
import readline from "readline";

// First half

// async function getData() {
//   let binaryOutput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   let gammaArray = [];
//   let epsilonArray = [];

//   const fileStream = fs.createReadStream("data/day3.txt");

//   const rl = readline.createInterface({
//     input: fileStream,
//   });

//   for await (const line of rl) {
//     for (let i = 0; i < line.length; i++) {
//       if (parseInt(line.slice(i, i + 1)) == 1) binaryOutput[i]++;
//     }
//   }
//   binaryOutput.map((item, index) => {
//     if (item >= 500) {
//         gammaArray[index] = 1;
//         epsilonArray[index] = 0;
//     } else {
//         gammaArray[index] = 0;
//         epsilonArray[index] = 1;
//     }
//   });
//   console.log(returnDecimalFromTwoBinaryArrays(gammaArray, epsilonArray));
// }

// const returnDecimalFromTwoBinaryArrays = (gamma, epsilon) => {
//     return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
// }

// getData();

// Second half

async function getData() {
  let binaryOutput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let initialState = [];
  let binaryArray = [];
  const oxygenRating = true;

  const fileStream = fs.createReadStream("data/day3.txt");

  const rl = readline.createInterface({
    input: fileStream,
  });

  for await (const line of rl) {
    binaryArray.push(line);
  }

  for (const line of binaryArray) {
    for (let i = 0; i < line.length; i++) {
      if (parseInt(line.slice(i, i + 1)) == 1) binaryOutput[i]++;
    }
  }

  binaryOutput.map((item, index) => {
    if (item >= 500) {
      initialState[index] = oxygenRating ? 1 : 0;
    } else {
      initialState[index] = oxygenRating ? 0 : 1;
    }
  });

  console.log(recursive(binaryArray, initialState, 0, oxygenRating));
}

const recursive = (binaryArray, initialState, index, oxygenRating) => {
  if (binaryArray.length == 1) return binaryArray;
  let newBinaryOutput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let newArray = [];
  let newState = [];

  for (const line of binaryArray) {
    if (
      parseInt(line.slice(index, index + 1)) == parseInt(initialState[index])
    ) {
      newArray.push(line);
    }
  }

  for (const line of newArray) {
    for (let i = 0; i < line.length; i++) {
      if (parseInt(line.slice(i, i + 1)) == 1) {
        newBinaryOutput[i]++;
      }
    }
  }

  newBinaryOutput.map((item, index) => {
    if (item >= newArray.length / 2) {
      newState[index] = oxygenRating ? 1 : 0;
    } else {
      newState[index] = oxygenRating ? 0 : 1;
    }
  });

  return recursive(newArray, newState, index + 1, oxygenRating);
};

const returnDecimalFromTwoBinaryArrays = (gamma, epsilon) => {
  return parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
};

getData();
