const http = require('http');
const figlet = require('figlet');
const port = process.env.PORT || 3000;
const connStr = process.env.CONNECTION_STRING || "local connStr";
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('Fake cstr ' + connStr);
})


app.get('', (req, res) => {
    figlet('Moacyr Vendramin', (err, data) => {
        if (err) {
            console.log("Error: " + err);
            return;
        }
        res.end(data);
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


/*
const handler = (req, res) => {

    console.log('Server received request 🔥🔥🔥');
    console.log('Fake cstr ' + process.env.CONNECTION_STRING);

    //res.end('Two - Hello World ' + process.env.CONNECTION_STRING);
    figlet('Moacyr Vendramin', (err, data) => {
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
*/