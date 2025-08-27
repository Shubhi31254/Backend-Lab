const fs = require('fs');
const path = 'data.txt';

// Check if file exists
if (fs.existsSync(path)) {
  const readStream = fs.createReadStream(path, { encoding: 'utf8' });

  readStream.on('data', chunk => {
    console.log('File Content:\n', chunk);
  });

  readStream.on('error', err => {
    console.error('Error reading file:', err.message);
  });

  readStream.on('end', () => {
    console.log('Finished reading file.');
  });
} else {
  console.error('Error: data.txt does not exist.');
}
