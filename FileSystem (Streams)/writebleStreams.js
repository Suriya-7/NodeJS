const fs = require('fs');

// Read the file and print its contents

const writeblestream = fs.createWriteStream('output.txt');

writeblestream.write('Hello Suriya');   

writeblestream.end();

writeblestream.on('finish', () => {
    console.log('File writing completed');
});