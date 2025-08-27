const fs = require('fs');

const readStream = fs.createReadStream('data.txt', 'utf8');

readStream.on('data', chunk => {
  console.log("Reading from file:\n", chunk);
});

readStream.on('error', err => {
  console.error('Error occurred:', err.message);
});
