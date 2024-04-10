// bidHandler.js
const controller = require("../controllers/auction.controller");

module.exports = function(io) {
    io.on('connection', (socket) => {
        console.log('New client connected');
        controller.ioinstance(io)
        socket.on('bid', (data) => {controller.bidH(data,io)});
        // socket.on('startTimer', (data) => {controller.startTimerH(data,io)});
        
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};
