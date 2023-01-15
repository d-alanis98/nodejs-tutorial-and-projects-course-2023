const { createReadStream } = require('fs');

const stream = createReadStream('./content/first.json', 'utf-8');

stream.on('data', data => {
    console.log(`Received data`);
});

stream.on('error', error => {
    console.error(error);
});

// HTTP
const http = require('http');

const PORT = process.env.PORT ?? 8000;

const server = http.createServer((req, res) => {
    const stream = createReadStream('./content/first.json');
    stream.on('open', () => {
        stream.pipe(res);
    });
    stream.on('close', () => res.end())
    stream.on('error', () => res.end());
});

server.listen(PORT, () => console.log(`Server listening on port ${ PORT }`));