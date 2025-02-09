// Create web server
// 1. Create a web server
// 2. Load the comments from the file
// 3. Return the comments from the server

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // 2. Load the comments from the file
    const filePath = path.resolve(__dirname, 'comments.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        // 3. Return the comments from the server
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the web server
// $ node comments.js

// Make a request to the server
// $ curl http://localhost:3000
// [{"name":"John","message":"Hello, World!"},{"name":"Jane","message":"Hi, John!"}]

// Make a request to the server
// $ curl http://localhost:3000
// [{"name":"John","message":"Hello, World!"},{"name":"Jane","message":"Hi, John!"}]

// Make a request to the server
// $ curl http://localhost:3000
// [{"name":"John","message":"Hello, World!"},{"name":"Jane","message":"Hi, John!"}]

// Make a request to the server
// $ curl http://localhost:3000
// [{"name":"John","message":"Hello, World!"},{"name":"Jane","message":"Hi, John!"}]

// Make a request to the server
// $ curl http://localhost:3000
// [{"name":"John","message":"Hello, World!"},{"name":"Jane","message":"Hi, John!"}]

// Make a request to the server
// $ curl http://localhost:3000
// [{"name":"John","message":"Hello, World!"},{"name":"Jane","message":"Hi, John!"}]

// Make a request to the server
// $ curl http://localhost:3000
// [{"name":"John