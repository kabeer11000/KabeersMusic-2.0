var express = require("express");
var router = express.Router();
var SSE = require("express-sse");
var sse = new SSE(["test"]);
const
	mongo = require("mongodb"),
	MongoClient = mongo.MongoClient;
const mongo_uri = require("../../keys/mongokey");

const mongoClient = MongoClient.connect(mongo_uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(db => db.db("music"));
const castDevices = [];

router.get("/connect", sse.init);
sse.send("success", "connected");

router.post("/devices/update", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id;

	mongoClient
		.then(db => {
			//db ? db : new Error("Db Connection Error")
			db.collection("active_devices").findOneAndUpdate({
				user_id: userId
			}, {
				$addToSet: {
					active_devices: deviceId
				}
			}, {
				upsert: true
			})
				.then(value => {
					sse.send({
						userId: userId,
						deviceId: deviceId,
						activeDevices: [...value.value.active_devices]
					}, `deviceListUpdate-${userId}`);
					//res.json("Device Registered");
				});
			//	.catch(e => res.status(400).json("Error"));
		});//.catch(e => res.status(400).json(e));
});
router.post("/devices/unregister", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id;

	mongoClient.then(db => {
		db.collection("active_devices").updateOne({
			user_id: userId,
		}, {
			$pull: {
				active_devices: deviceId
			}
		}).then(r => res.json("Device Unregistered")).catch(e => res.status(400).json(e));
	}).catch(e => res.status(400).json(e));
});

router.post("/devices/send", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id,
		songId = req.headers.songid;

	sse.send({userId: userId, deviceId: deviceId, songId: songId}, `devicePlay-${userId}-${deviceId}`);
	/*
TODO do Mongo stuff later
	mongoClient.then(db => {
		db.collection("active_devices").updateOne({
			user_id: userId,
		}, {
			$pull: {
				active_devices: deviceId
			}
		}).then(r => res.json("Device Unregistered")).catch(e => res.status(400).json(e));
	}).catch(e => res.status(400).json(e));

 */
});
// Protected SSE
const castSSE = new SSE(["test"]);

// Add User ID Session
router.get("/user/connect/:user_id/:device_id", (req, res) => {
	const userId = req.params.user_id;

	if (castDevices.findIndex(m => m.userId === userId) === -1) {
		castDevices.push({
			userId: userId,
			castDevices: []
		});
	}
	castSSE.init(req, res);
});

// Update User Object
router.post("/user/devices/update", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id;

	castDevices.map(session => session.userId === userId ? session.castDevices.find(deviceId) === null ? session.castDevices.push(deviceId) : null : null);
	return res.json("done");
});

// Remove User Device Object
router.post("/user/devices/unregister", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id;

	castDevices.map(session => session.userId === userId ? session.castDevices.filter(deviceId => deviceId === deviceId) : null);
	castSSE.send({...castDevices.find(session => session.userId === userId)});
	return res.json("done");
});

// Send Data to Other Device
router.post("/devices/send", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id,
		songId = req.headers.songid;
	const castSession = castDevices.find(session => session.userId === userId);
	if (castSession.castDevices.includes(deviceId)) sse.send({
		userId: userId,
		deviceId: deviceId,
		songId: songId
	}, `devicePlay-${userId}-${deviceId}`);
	return res.json("done");
});


module.exports = router;
