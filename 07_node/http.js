const { log } = require('console');
const { createServer } = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" })
    response.write(`
        <meta charset="UTF-8">
        <h1>Olá Senhor</h1>
        <p>Primeira página com Node.js</p>
    `);

    response.end();
});

server.listen(8000);

console.log("Ouvindo a porta 8000");
