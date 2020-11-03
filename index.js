const http = require('http');
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log('Server received request 🔥🔥🔥');
    res.end('One - Hello Github World!!!');
}

const server = http.createServer(handler);

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is listening on port  ${port}`)
    }
})
