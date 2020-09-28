const
	express = require("express"),
	router = express.Router();
//var p2p = require('socket.io-p2p-server').Server;
module.exports = (io) => {
	io.on("connection", (socket) => {
		//socket.join("roomName");
		console.log("Connected");
		socket.on("*", (e, d) => {
			socket.to("roomName").emit("deviceConnectionTest-5f6d20d5c41894");
			console.log("deviceConnectionTest-5f6d20d5c41894");
		});
		socket.to("roomName").emit("Client Will It From Here", "initialConnection");
		socket.emit(`socketTest-5f6d20d5c41894`, `AW`);
		//End ON Events
		socket.on("end", (e) => {

		});
		socket.on("disconnect", (e) => {
			//socket.emit('socketTest-5f6d20d5c41894', 's');
			console.log(socket.handshake.query.deviceId);
		});
	});
	io.on("disconnect", (socket) => {
		console.log(socket);
	});
	return router;
};
// socket.on('disconnect',function() {
