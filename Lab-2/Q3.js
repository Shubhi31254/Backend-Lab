const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Data has been piped from input.txt to output.txt');
});

readStream.on('error', err => {
  console.error('Error reading input.txt:', err.message);
});

writeStream.on('error', err => {
  console.error('Error writing output.txt:', err.message);
});
