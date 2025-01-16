const fs = require('fs');

const readableStream = fs.createReadStream('data.txt');

readableStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

readableStream.on('end', () => {
    console.log('File reading completed');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});