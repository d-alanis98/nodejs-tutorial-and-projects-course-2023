const http = require('http');

const PORT = process.env.PORT ?? 8000;

const server = http.createServer((req, res) => {
    if(req.url === '/')
        return res.end(`
            <h1>Hello from the HTTP module</h1>
        `);
    if(req.url === '/about')
        return res.end(`
            <h1>About section</h1>
        `)
    res.statusCode = 404;
    res.end('Not found');
    
});

server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${ PORT }`);
});