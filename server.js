let express = require('express');
let http = require('http');
let app = express();
let cors = require('cors');
let server = http.createServer(app);
let socketio = require('socket.io');
let io = socketio.listen(server);

app.use(cors());
const PORT = process.env.PORT || 8080;

let users = {};

let socketToRoom = {};

const maximum = process.env.MAXIMUM || 4;

server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});