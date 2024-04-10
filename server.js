const dotenv = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const db = require("./app/models");
const User = db.user;
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const PORT = process.env.PORT || 3999; // If PORT is not defined in .env, use 3999 as default
const HOST = 'localhost';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/index')(app);
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});

// Import socket event handlers
const bidHandler = require('./app/sockets/bidHandler')(io); 


// In the MongoDB Atlas connection string. Replace '<password>' with your actual password
const connectionString = 'mongodb://localhost:27017/gamerji_socket';

// Connect to MongoDB Atlas
db.mongoose.connect(connectionString, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => {
    console.log('DB CONNECTION ___________ SUCCESS');
})
.catch(err => {
    console.log('DB CONNECTION ___________ FAILED');
    console.log(err);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
