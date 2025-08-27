const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello, Node.js!', 'utf8');

writeStream.end();

writeStream.on('finish', () => {
  console.log('Data written successfully to output.txt');
});

writeStream.on('error', err => {
  console.error('Error writing file:', err.message);
});
