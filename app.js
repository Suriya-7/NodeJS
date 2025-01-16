console.log("Starting Node.js");

// HTTP methods in Node.js
        const http = require('http');

        // const server = http.createServer((req, res) => {
        // res.end('Hello Suriya');
        // });

        // server.listen(3000, () => {
        // console.log('Server is running on port 3000');
        // });

// File System in Node.js
        const fs = require('fs');

        // fs.writeFile('message.txt', 'Hello Suriya', (err) => {
        // if (err) {
        // console.log(err);
        // } else {
        // console.log('File created successfully');
        // }
        // });
    
        // fs.readFile('message.txt', 'utf8', (err, data) => {
        // if (err) {
        // console.log(err);
        // } else {
        // console.log(data);
        // }
        // });

// Operating System (OS) Information in Node.js
        const os = require('os');
        // console.log(os.platform());
        // console.log(os.arch());
        // console.log(os.cpus());

// Path Module in Node.js
        const path = require('path');
        // const filePath = path.join(__dirname, 'message.txt');
        // console.log(filePath);

// Hashing in Node.js
        const crypto = require('crypto');
        // const hash = crypto.createHash('sha256');
        // hash.update('Hello Suriya');
        // console.log(hash.digest('hex'));

// Custome Module in Node.js
        const greetings = require('./CustomModules');
        // const message = greetings('Suriya');
        // console.log(message);
        
// Multiple Module in Node.js
        const math = require('./math');
        // console.log(math.add(2, 3));
        // console.log(math.multiply(2, 3));
        // console.log(math.subtract(2, 3));
        // console.log(math.divide(2, 0));
console.log("Ending Node.js, But There are more modules in Node.js");
