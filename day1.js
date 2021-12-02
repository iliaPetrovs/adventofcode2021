import fs from 'fs';
import readline from 'readline';

async function getData() {
    let oneFromCurrent = 10000;
    let twoFromCurrent = 10000;
    let prevTriple = 100000;
    let amountOfTimesIncreased = 0;
    
    const fileStream = fs.createReadStream('data/day1.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
    });
  
    for await (const line of rl) {
        let currentTriple = parseInt(line) + oneFromCurrent + twoFromCurrent;
        if (currentTriple > prevTriple) {
            amountOfTimesIncreased++;
        }
        prevTriple = currentTriple;
        twoFromCurrent = oneFromCurrent
        oneFromCurrent = parseInt(line);
    }
    console.log(amountOfTimesIncreased);
  }

getData();