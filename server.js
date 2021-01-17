let express = require('express');
let http = require('http');
let app = express();
let cors = require('cors');
let server = http.createServer(app);
let socketio = require('socket.io');
let io = socketio.listen(server);

app.use(cors());
const PORT = process.env.PORT || 8080;

let host = {};
let socketToRoom = {};

const maximum = process.env.MAXIMUM || 4;

io.on('connection', socket => {
    socket.on('join_host', data => {
        console.log(`join_host ${data}`);

        host[data.room] = {
            id: socket.id,
            isOpen: false
        };

        socketToRoom[socket.id] = data.room;

        console.log(`host ==> ${host[data.room].id}`);
        console.log(`socketToRoom ===> ${socketToRoom[socket.id] = data.room}`);
    });

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        
        // 연결 해제가 호스트 일 때,
        if(host[roomID]){
            if(host[roomID].id === socket.id) {

            }
        }
    })
});

server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});