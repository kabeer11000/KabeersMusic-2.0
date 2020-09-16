const brain = require("brain.js");
var express = require("express");
var router = express.Router();
const
	mongo = require("mongodb"),
	MongoClient = mongo.MongoClient;
const mongo_uri = require("../../keys/mongokey");
var data = require("./data");
//var data = [{input:'1',output:'2'}];
//const net = new brain.NeuralNetwork();
const net = new brain.recurrent.LSTM({
	hiddenLayers: [3, 4], // array of ints for the sizes of the hidden layers in the network
	activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
	leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
	learningRate: 0.01, // scales with delta to effect training rate --> number between 0 and 1
});
//new brain.
net.train(data, {
	// Defaults values --> expected validation
	iterations: 2000, // the maximum times to iterate the training data --> number greater than 0
	errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
	log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
	logPeriod: 5, // iterations between logging out --> number greater than 0
	momentum: 0.01, // scales with next layer's change value --> number between 0 and 1
	callback: null, // a per
	// iodic call back that can be triggered while training --> null or function
	callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
	timeout: Infinity, // the max number of milliseconds to train for --> number greater than 0
	learningRate: 0.01, // scales with delta to effect training rate --> number between 0 and 1
});
net.maxPredictionLength = 10;
const mainJs = async (t) => {
	//net.trainAsync()
	const output = net.run(t);
	return output;
};
const getMaximum = e => {
	let t, l = 1, n = 0;
	for (let m = 0; m < e.length; m++) {
		for (let r = m; r < e.length; r++) e[m] === e[r] && n++, l < n && (l = n, t = e[m]);
		n = 0;
	}
	return {name: t, times: l};
};


router.get("/recom", (req, res) => {
	mainJs(req.query.q.toLowerCase()).then(value => res.json(value));
});

router.get("/create", (req, res) => {
	MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(async (db) => {
			if (!db) return res.status(500).json("Internal Server Error");
			const dbo = db.db("music");
			dbo.collection("history")
				.find({type: "watchHistory"}).toArray()
				.then(results => {
					let user_ids = [],
						outputs = [];
					results.map((s) => user_ids.push(s.user_id));
					const main = (outputs = (user_ids = user_ids.filter((s, e) => user_ids.indexOf(s) === e)).map((s) => results.filter((e) => e.user_id === s))).map((s, e) => {
							const u = {};
							return (
								s.map((s, e) => {
									u[s.user_id] ? u[s.user_id].push(s.artist_name.replace(" ", "_")) : (u[s.user_id] = []);
								}),
									Object.keys(u).map((s) => ({
										input: u[s].join(" "),
										output: getMaximum(u[s]).name.replace(" ", "_")
									}))
							);
						}),
						res_ = [];
					main.map((s, e) => res_.push(s[0]));
					res.json(res_);

				});
		});
});
module.exports = router;

/*
					results.map((object, index) => {
						outputs.push({
							input: object.artist_name,
							output: 'porn'
						})
					});




					let user_ids = [];
					let outputs = [];
					results.map((object) => user_ids.push(object.user_id));
					user_ids = user_ids.filter((item, pos) => user_ids.indexOf(item) === pos);
					outputs = user_ids.map((id) => results.filter((obj) => obj.user_id === id));
					const main = outputs.map((user, userIndex) => {
						const artistNames = {};
						user.map((object, objectIndex) => {
							artistNames[object.user_id]
								? artistNames[object.user_id].push(object.artist_name)
								: (artistNames[object.user_id] = []);
						});

						return Object.keys(artistNames).map((v) => ({
							input: artistNames[v].join(" "),
							output: getMaximum(artistNames[v]).name
						}));
					});
					const res_ = [];
					main.map((v, i) => res_.push(v[0]));

 */
