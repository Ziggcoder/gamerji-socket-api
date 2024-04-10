
const db = require("../models");
const User = db.user;
var ioinst

exports.ioinstance = (io) => {
    ioinst = io
};

exports.user = (req, res, next) => {
    console.log("/api/auction/user>>>", req.param.userId)
};

exports.start = (req, res, next) => {
    console.log("/api/auction/start>>>")
    const currentTime = new Date();
    // Calculate the future time by adding 30 seconds to the current time
    const startTime = new Date(currentTime.getTime() + 30 * 1000); // Adding 30 seconds in milliseconds
    // Emit the event with the future time
    ioinst.emit('start', { time: startTime ,start:true,stop:false});
    res.json({success:true})
};

exports.stop = (req, res, next) => {
    console.log("/api/auction/stop>>>")
    // const currentTime = new Date();
    // Calculate the future time by adding 30 seconds to the current time
    // const startTime = new Date(currentTime.getTime() + 30 * 1000); // Adding 30 seconds in milliseconds
    // Emit the event with the future time
    ioinst.emit('stop', {start:false ,stop:true});
    res.json({success:true})
};

exports.bidH = (d, io) => {
    let date= new Date(); // This will automatically get the current date and time
let timestamp = date.getTime(); // This will get the current timestamp
// console.log(timestamp);
let year = date.getFullYear();
let month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero indexed
let day = ("0" + date.getDate()).slice(-2);
let hours = ("0" + date.getHours()).slice(-2);
let minutes = ("0" + date.getMinutes()).slice(-2);
let seconds = ("0" + date.getSeconds()).slice(-2);

// Constructing the date string
let dateString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

// console.log(dateString); // Output: 2024-05-14 16:13:00
    let data=d
    data.time=dateString 
    io.emit('bid', data)

};

exports.startTimerH = (data, io) => {
    io.emit('bid', data)
};