const http = require('http');
const figlet = require('figlet');
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log('Server received request 🔥🔥🔥');
    console.log('Fake cstr ' + process.env.CONNECTION_STRING);
    
    //res.end('Two - Hello World ' + process.env.CONNECTION_STRING);
    figlet('Hello Figlet World', (err, data) => {
        if (err) {
            console.log("Error: " + err);
            return;
        }
        res.end(data);
    });
}

const server = http.createServer(handler);

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is listening on port  ${port}`)
    }
})
