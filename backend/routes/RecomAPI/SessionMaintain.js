const
	express = require("express"),
	router = express.Router(),
	SSE = require("express-sse"),
	mongo = require("mongodb"),
	MongoClient = mongo.MongoClient,
	mongo_uri = require("../../keys/mongokey");

const mongoClient = MongoClient.connect(mongo_uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(db => db.db("music"));
const castDevices = [];
const activeDevices = [];

// Protected SSE
const castSSE = new SSE();

// Add User ID Session
router.get("/user/connect/:userId/:deviceId", (req, res) => {
	if (!req.params.userId || !req.params.deviceId) return res.status(400).json("Invalid Query");
	const
		userId = req.params.userId,
		deviceId = req.params.deviceId;

	const currentSession = castDevices.find(m => m.userId === userId);
	if (currentSession) {
		currentSession.castDevices.filter(value => value !== deviceId).push(deviceId);
		castDevices.filter(value => value.userId === userId).push(currentSession);
	} else castDevices.push({
		userId: userId,
		castDevices: [deviceId]
	});

	castSSE.init(req, res);
	return castSSE.send(castDevices.find(m => m.userId === userId), `deviceListUpdate-${userId}`);
});
// Update User Object
router.post("/user/devices/update", (req, res) => {
	if (!req.headers.deviceid || !req.headers.userdata) return res.status(400).json("Invalid Headers");
	const
		deviceId = req.headers.deviceid,
		userId = req.headers.userdata;

	const currentSession = castDevices.find(session => session.userId === userId);
	if (currentSession.castDevices.findIndex(m => m === deviceId) === -1) currentSession.castDevices.push(deviceId);

	castDevices.filter(value => value.userId === userId).push(currentSession);
	castSSE.send(currentSession || castDevices.find(value => value.userId === userId), `deviceListUpdate-${userId}`);
	res.json(currentSession);
});

// Remove User Device Object
router.post("/user/devices/unregister", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id;

	castDevices.map(session => session.userId === userId ? session.castDevices.filter(deviceId => deviceId === deviceId) : null);
	castSSE.send({...castDevices.find(session => session.userId === userId)}, `unregister-${deviceId}`); // , `unregister-${deviceId}`
});

// Send Data to Other Device
router.post("/user/devices/send", (req, res) => {
	if (!req.headers.videoelement || !req.headers.remotedeviceid || !req.headers.deviceid || !req.headers.userdata) return res.status(400).json("Invalid Headers");
	const
		deviceId = req.headers.deviceid,
		remoteDeviceId = req.headers.remotedeviceid,
		userId = JSON.parse(req.headers.userdata).user_id,
		videoElement = JSON.parse(req.headers.videoelement);

	const castSession = castDevices.find(session => session.userId === userId);
	if (castSession.castDevices.includes(deviceId)) {
		castSSE.send({
			userId: userId,
			deviceId: deviceId,
			video: videoElement,
			remoteDeviceId: remoteDeviceId,
		}, `devicePlay-${userId}-${remoteDeviceId}`);
	}
	res.json({
		userId: userId,
		deviceId: deviceId,
		video: videoElement,
		remoteDeviceId: remoteDeviceId,
	});
});


// Send Data to Other Device
router.post("/user/devices/pause", (req, res) => {
	if (!req.headers.remotedeviceid || !req.headers.deviceid || !req.headers.userdata) return res.status(400).json("Invalid Headers");
	const
		deviceId = req.headers.deviceid,
		remoteDeviceId = req.headers.remotedeviceid,
		userId = JSON.parse(req.headers.userdata).user_id;

	const castSession = castDevices.find(session => session.userId === userId);
	if (castSession.castDevices.includes(deviceId)) {
		castSSE.send({
			userId: userId,
			deviceId: deviceId,
			remoteDeviceId: remoteDeviceId,
		}, `devicePlayRemoveListener-${userId}-${remoteDeviceId}`);
	}
	return res.status(200).json({});
});
// Get Devices TODO Hide in Production
router.get("/user/devices/all", (req, res) => {
	res.json(castDevices);
});

// console.log(castDevices.map(session => session.userId === userId ? session.castDevices[deviceId] === null ? session.castDevices.push(deviceId) : null : null));


const functions = {
	deviceRegister: async (socket, data) => {
		if (!data.userId || !data.deviceId) return new Error("Invalid Query");
		const
			userId = data.userId,
			deviceId = data.deviceId;

		const currentSession = castDevices.find(m => m.userId === userId);
		!currentSession ? castDevices.push({
			userId: userId,
			castDevices: [deviceId]
		}) : currentSession.castDevices.filter(value => value === deviceId).push(deviceId);
		return socket.emit(`deviceListUpdate-${userId}`, currentSession);
	},
	deviceUnregister: (socket, data) => {
		const
			deviceId = data.deviceId,
			userId = data.userId;

		castDevices.map(session => session.userId === userId ? session.castDevices.filter(deviceId => deviceId === deviceId) : null);
		const currentSession = castDevices.find(session => session.userId === userId);
		socket.emit(`unregister-${deviceId}`, currentSession);
		socket.emit(`deviceListUpdate-${userId}`, currentSession);
	},
	devicePlay: (socket, data) => {
		if (!data.videoelement || !data.remotedeviceid || !data.deviceid || !data.userdata) return new Error("Invalid Headers");
		const
			deviceId = data.deviceid,
			remoteDeviceId = data.remotedeviceid,
			userId = data.userId,
			videoElement = data.videoelement;

		const castSession = castDevices.find(session => session.userId === userId);
		if (castSession.castDevices.includes(deviceId)) socket.emit(`devicePlay-${userId}-${remoteDeviceId}`, {
			userId: userId,
			deviceId: deviceId,
			video: videoElement,
			remoteDeviceId: remoteDeviceId,
		});
	},
	//deviceListUpdate-${userId}
	devicePause: (socket, data) => {
		if (!data.remoteDeviceId || !data.deviceId || !data.userId) return new Error("Invalid Headers");
		const
			deviceId = data.deviceId,
			remoteDeviceId = data.remoteDeviceId,
			userId = data.userId;

		const castSession = castDevices.find(session => session.userId === userId);
		if (castSession.castDevices.includes(deviceId)) socket.emit(`devicePlayRemoveListener-${userId}-${remoteDeviceId}`, {
			userId: userId,
			deviceId: deviceId,
			remoteDeviceId: remoteDeviceId,
		});
	}
};


module.exports = router;
