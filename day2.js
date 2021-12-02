import fs from 'fs';
import readline from 'readline';

async function getData() {
    let horizontal = 0;
    let depth = 0;

    const fileStream = fs.createReadStream('data/day2.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
    });
  
    for await (const line of rl) {
        if (line.includes('forward')) {
            horizontal += parseInt(line.slice(-1))
        }
        if (line.includes('down')) {
            depth += parseInt(line.slice(-1))
        }
        if (line.includes('up')) {
            depth -= parseInt(line.slice(-1))
        }
    }
    console.log(horizontal * depth);
  }

getData();