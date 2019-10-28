const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let users = [
    {id: 1, name: "V"},
    {id: 2, name: "M"},
    {id: 3, name: "T"},
    {id: 4, name: "S"},
];

app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);

    for(let i = 0; i < users.length; i++) {
        if(users[i].id === id) {
            res.send({foundedUser: users[i]});
            return;
        }
    }
    res.send({message: "not found"});
});

app.post('/data', (req, res) => {
    let user = req.body;
    user.password = '1111';
    res.send({createdUser: user});
});

app.put('/data', (req, res) => {
    let user = req.body;
    user.name = req.query.name;
    res.send({updatedUser: user});
});

app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++) {
        if(users[i].id === id) {
            users.splice(i, 1);
            res.send({updatedUsers: users});
            return;
        }
    }
    res.send({message: "not found"});
});

// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, console.log('server is running'));
module.exports = app;