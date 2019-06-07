const express = require('express')
const helmet = require('helmet')

const sprint_router = require('./api/sprint_router');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('<h2>Sprints API starting</h2>')
})

server.use('/api/', sprint_router)

module.exports = server;