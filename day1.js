import fs from 'fs';
import readline from 'readline';

async function getData() {
    let prevMeasurement = 10000;
    let amountOfTimesIncreased = 0;
    const fileStream = fs.createReadStream('data/day1.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
    });
  
    for await (const line of rl) {
        if (parseInt(line) > prevMeasurement) {
            amountOfTimesIncreased++;
        }
        prevMeasurement = line;
    }
    console.log(amountOfTimesIncreased);
  }

getData();