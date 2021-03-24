const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
app.use(express.static('public'));

// const http = require('http');
// const fs = require('fs');


// http.createServer(function (req, res) {
//     fs.readFile('index.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end();
//     });
// });

app.listen(port, () => console.log(`listening on port ${port}...`));