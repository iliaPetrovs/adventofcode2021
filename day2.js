import fs from 'fs';
import readline from 'readline';

async function getData() {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    const fileStream = fs.createReadStream('data/day2.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
    });
  
    for await (const line of rl) {
        if (line.includes('forward')) {
            const units = parseInt(line.slice(-1));
            horizontal += parseInt(line.slice(-1));
            depth += aim * units;
        }
        if (line.includes('down')) {
            const units = parseInt(line.slice(-1));
            aim += units;
        }
        if (line.includes('up')) {
            const units = parseInt(line.slice(-1));
            aim -= units;
        }
    }
    console.log(horizontal * depth);
  }

getData();