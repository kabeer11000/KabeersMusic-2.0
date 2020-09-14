function makeid(r) {
	for (var a = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = t.length, o = 0; o < r; o++) a += t.charAt(Math.floor(Math.random() * n));
	return a;
}

var express = require("express");
var router = express.Router();
const ytdl = require("ytdl-core");
const
	mongo = require("mongodb"),
	MongoClient = mongo.MongoClient;
//const mongo_uri = "mongodb://127.0.0.1:27017/?readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass%20Community&ssl=false";
const mongo_uri = require("../keys/mongokey");
var franc = require("franc");
let axios = require("axios");
var jwt = require("jsonwebtoken");
const ytsr = require("ytsr");
var ytpl = require("ytpl");
const simpleYT = require("simpleyt");
const yt = require("youtube-search-without-api-key");
const yts = require("yt-search");

Array.prototype.last = () => this[this.length - 1];
const aut = 400;

function YouTubeGetID(e) {
	return void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? e[2].split(/[^0-9a-z_\-]/i)[0] : e;
}

const currentURL = "http://localhost:9000/";
//const currentURL = "https://kabeersmusic.herokuapp.com/";
const youtube_key = "AIzaSyAJkG5coTOfjTRgpYRvCUq0C0V0WFc7tZU";
/*
const endPoints = {
	searchYoutubeMultipleIds: (ids, maxResults = 5) => `https://www.googleapis.com/youtube/v3/videos?key=${youtube_key}&part=snippet&id=${ids.join(",")}&maxResults=${maxResults}`,
	searchYotubeMultipleIdsFake: (ids, maxResults = 5) => "https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/videoIdSearch.json",
	searchYoutube: (q, maxResults = 5) => `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&type=video&key=${youtube_key}&q=${q}&maxResults=${maxResults}`,
	searchYoutubeFake: (q, maxResults = 5) => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/search-result.json`,
	ytPlaylist: (playListId, maxResults = 5) => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoCategoryId=10&type=video&key=${youtube_key}&playlistId=${playListId}&maxResults=${maxResults}`
};
*/
const endPoints = {
	searchYoutubeMultipleIds: (ids, maxResults = 5) => `${currentURL}api/backend/search?q=${ids.join(" , ")}&maxResults=${maxResults}`,
	searchYotubeMultipleIdsFake: (ids, maxResults = 5) => "https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/videoIdSearch.json",
	searchYoutube: (q, maxResults = 5) => `${currentURL}api/backend/search?q=${q}&maxResults=4`,
	searchYoutubeFake: (q, maxResults = 5) => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/search-result.json`,
	ytPlaylist: (playListId, maxResults = 5) => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoCategoryId=10&type=video&key=${youtube_key}&playlistId=${playListId}&maxResults=${maxResults}`
};
const playlistsIds = {
	LatestSongs: "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
	RomanticSongs: "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
	EdmSongs: "PLw-VjHDlEOgs658kAHR_LAaILBXb-s6Q5",
	TopBolloywood: "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
	TopPop: "PLDcnymzs18LU4Kexrs91TVdfnplU3I5zs",
	Reggaeton: "PLS_oEMUyvA728OZPmF9WPKjsGtfC75LiN"
};
const generateRandomHeadline = (name) => {
	const templates = [`Because You Listened to ${name}`, "Based on Last Searches", `${name}`];
	return templates[Math.floor(Math.random() * (+templates.length - +0)) + +0];
};
const pickRandom = (arr, count) => {
	let _arr = [...arr];
	return [...Array(count)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
};

router.get("/song", async (req, res) => {
	if (!req.headers.authorization) return res.status(402).json("Bad Request");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err) return res.status(400).json(err.message);
		const required_prems = ["s564d68a34dCn9OuUNTZRfuaCnwc6:getSong", "s564d68a34dCn9OuUNTZRfuaCnwc6:history.readwrite"];
		const decoded_grantTypes = decoded.grant_types.split("|");
		if (!required_prems.every(i => decoded_grantTypes.includes(i))) return res.status(400).json("Invalid Token Scope");
		if (decoded) {
			MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
				.then(async (db) => {
					if (!db) return res.status(500).json("Internal Server Error");
					const dbo = db.db("music");
					ytdl
						.getInfo(req.query.id)
						.then(info => {
							const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
							res.set("Cache-Control", "public, max-age=20000"); //6hrs aprox
							res.json(audioFormats[1].url);
						})
						.then(dbo.collection("history").insertOne({
							type: "listeningHistory",
							time: Date.now(),
							user_id: decoded.user_id,
							yt_video_id: req.query.id,
						}).catch(e => res.json(e.message)))
						.catch(err => res.status(400).json("Video Not Found"));
				}).catch(e => res.status(500).json("Database Connection Error"));
		}
	});
});
router.get("/search", (req, res) => {
	if (!req.headers.authorization) return res.status(402).json("Token Not Found");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err || !decoded) return res.status(402).json("Token Expired or Invalid Signature");
		const user_id = decoded.user_id;
		const required_prems = ["s564d68a34dCn9OuUNTZRfuaCnwc6:search", "s564d68a34dCn9OuUNTZRfuaCnwc6:history.readwrite"];
		const decoded_grantTypes = decoded.grant_types.split("|");
		if (!required_prems.every(i => decoded_grantTypes.includes(i))) return res.status(400).json("Invalid Token Scope");

		MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
			.then((db) => {
				if (!db) return res.status(500).json("Internal Server Error");
				const dbo = db.db("music");
				dbo.collection("history").insertOne({
					type: "searchHistory",
					time: Date.now(),
					user_id: user_id,
					query: req.query.q,
				}).then(() => {
					return axios.get(endPoints.searchYoutube(req.query.q))
						.then(v => res.status(200).json(v.data))
						.catch(e => res.status(400).json(e));
				});
			}).catch(e => res.status(500).json("Database Connection Error"));
	});
});
router.get("/feed55", async (req, res) => {
	if (!req.headers.authorization) return res.status(402).json("Bad Request");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err || !decoded) return res.status(400).json(err);
		if (!decoded.grant_types.split("|").includes("s564d68a34dCn9OuUNTZRfuaCnwc6:feed")) return res.status(402).json("Invalid Token Scope");
		const user_id = decoded.user_id;

		MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
			.then(async (db) => {
				if (db) {
					const dbo = db.db("music");
					const getMaximum = (e) => {
						let t, n = 1, l = 0;
						for (let m = 0; m < e.length; m++) {
							for (let r = m; r < e.length; r++) e[m] === e[r] && l++, n < l && (n = l, t = e[m]);
							l = 0;
						}
						return {name: t, times: n};
					};


					const getSearchHistory = async () => {
						const videoIds = [];
						await dbo.collection("history")
							.find({user_id: user_id, type: "searchHistory"}).toArray()
							.then(value => value.map((v, i) => videoIds.push(v.video_id)));
						return videoIds.length ? {
							title: `Based on Last Searches`,
							url: await axios.get(endPoints.searchYoutubeMultipleIds(pickRandom(videoIds, 5)))
								.then(v => v.data)
								.catch(e => ([])),
						} : null;
					};
					const getTopBollywood = async () => {
						return {
							title: "Top Bollywood",
							url: await axios.get(endPoints.ytPlaylist(playlistsIds.TopBolloywood))
								.then(v => v.data)
								.catch(e => [])
						};
					};

					const getByArtist = async () => {
						const channelTitles = [];
						await dbo.collection("history")
							.find({user_id: user_id, type: "watchHistory"}).toArray()
							.then(value => value.map((v, i) => channelTitles.push(v.artist_name)));
						const ListenedMaximum = getMaximum(channelTitles);
						return ListenedMaximum ? {
							title: `Because You Listened to ${ListenedMaximum.name}`,
							url: await axios.get(endPoints.searchYoutube(`${ListenedMaximum.name} music`))
								.then(v => v.data)
								.catch(e => []),
						} : null;
					};

					await dbo.collection("history")
						.findOne({user_id: user_id, type: "watchHistory"})
						.then(async (result, err) => {
							if (!result || err) return res.status(402).json("Error No History was found for this user");
							res.status(200).json({
								type: "KabeersMusic#Feed",
								user_id: user_id,
								items: [
									(await getByArtist()) || null,
									(await getSearchHistory()) || null,
									(await getTopBollywood()) || null
								]
							});
						});
				}
			});
	});
});
const getMaximum = (e) => {
	let t, n = 1, l = 0;
	for (let m = 0; m < e.length; m++) {
		for (let r = m; r < e.length; r++) e[m] === e[r] && l++, n < l && (n = l, t = e[m]);
		l = 0;
	}
	return {name: t, times: n};
};
router.get("/feed/search", (req, res) => {
	if (!req.headers.authorization) return res.status(402).json("Bad Request");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err || !decoded) return res.status(400).json(err);
		if (!decoded.grant_types.split("|").includes("s564d68a34dCn9OuUNTZRfuaCnwc6:feed")) return res.status(402).json("Invalid Token Scope");
		const user_id = decoded.user_id;

		MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
			.then((db) => {
				if (!db) return res.status(500).json("Error Connecting to Database");
				db.db("music").collection("history")
					.find({user_id: user_id, type: "searchHistory"}).toArray()
					.then(value => (value.map((v, i) => (v.query))))
					.then((videoIds) => {
						if (!videoIds) return res.status(400).json(" No History Found");
						//videoIds.filter((item, pos, self) => self.indexOf(item) === pos), 5)
						axios.get(endPoints.searchYoutube(videoIds))
							.then(v => v.data)
							.then((ytResponse) => {
								return res.status(200).json({...ytResponse, title: `Based on Your Last Search`});
							})
							.catch(e => res.status(400).json(e.message));
					}).catch(e => res.status(400).json(e));
			}).catch(e => res.status(400).json(e));
	});
});
router.get("/feed/topartist", (req, res) => {
	if (!req.headers.authorization) return res.status(402).json("Bad Request");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err || !decoded) return res.status(400).json(err);
		if (!decoded.grant_types.split("|").includes("s564d68a34dCn9OuUNTZRfuaCnwc6:feed")) return res.status(402).json("Invalid Token Scope");
		const user_id = decoded.user_id;

		MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
			.then((db) => {
				if (!db) return res.status(500).json("Error Connecting to Database");
				const channelTitles = [];
				db.db("music").collection("history")
					.find({user_id: user_id, type: "watchHistory"}).toArray()
					.then(value => value.map((v, i) => channelTitles.push(v.artist_name)))
					.then(() => {
						const ListenedMaximum = getMaximum(channelTitles);
						axios.get(endPoints.searchYoutube(`${ListenedMaximum.name} official music`).toLowerCase())
							.then(v => v.data)
							.then((ytResponse) => {
								return ListenedMaximum.name ? res.status(200).json({
									...ytResponse,
									title: `Because You Listened to ${ListenedMaximum.name}`
								}) : res.status(400).json("No Data Found For User");
							}).catch(e => res.status(500).json(e.message));
					}).catch(e => res.status(500).json(e));
			}).catch(e => res.status(500).json(e));
	});
});
router.get("/feed/artists/all", (req, res) => {
	if (!req.headers.authorization) return res.status(402).json("Bad Request");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err || !decoded) return res.status(400).json(err);
		if (!decoded.grant_types.split("|").includes("s564d68a34dCn9OuUNTZRfuaCnwc6:feed")) return res.status(402).json("Invalid Token Scope");
		const user_id = decoded.user_id;

		MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
			.then((db) => {
				if (!db) return res.status(500).json("Error Connecting to Database");
				const channelTitles = [];
				db.db("music").collection("history")
					.find({user_id: user_id, type: "watchHistory"}).toArray()
					.then(value => value.map((v, i) => channelTitles.push({id: v.channelId, name: v.artist_name})))
					.then(async () => {
						res.status(200).json({
							kind: "KabeersMusic#Artists",
							items: channelTitles.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i),
						});
					}).catch(e => res.status(500).json(e));
			});
	});
});
router.post("/history/save", async (req, res) => {
	if (!req.body || !req.body.time || !req.headers.authorization) return res.status(400).json("402 Bad Request");
	MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
		.then((db) => {
			if (!db) return res.status(500).json("Internal Server Error");
			const dbo = db.db("music");
			jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
				if (err) return res.status(400).json("JWT Expired");
				if (!decoded.grant_types.split("|").includes("s564d68a34dCn9OuUNTZRfuaCnwc6:history.readwrite")) return res.status(402).json("Invalid Token Scope");

				const user_id = decoded.user_id;
				dbo.collection("history").insertOne({
					type: "watchHistory",
					time: req.body.time,
					user_id: user_id,
					video_id: req.body.video_id,
					artist_name: req.body.artist_name,
					tags: req.body.tags.split(","),
					yt_catagory: req.body.yt_catagory,
					video_title: req.body.video_title,
					video_keywords: req.body.video_keywords.split(","),
					language: franc(req.body.video_description, {}) || "en",
					video_featuring_artists: req.body.video_featuring_artists.split(","),
					channelId: req.body.channelId
				}, function (err, result) {
					if (err) return res.status(400).json(err.message);
					return res.status(200).json(result);
				});
			});
		}).catch(err => {
		res.status(500).json(err);
		//res.status(500).json('Cannot Connect to Database')
	});
});
router.get("/request/:url", (req, res) => {
	if (!req.params.url || !req.headers.authorization) return res.status(402).json("402 Bad Request");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err || !decoded) return res.status(400).json(err.message);
		axios.get(`${decodeURI(req.params.url)}&key=`)
			.then(function (response) {
				// handle success
				res.status(response.status).json(response.data);
			})
			.catch(e => res.json({message: e.message}));
	});
});
router.get("/backend/search", (req, res) => {
	yts({query: decodeURI(req.query.q)}).then(value => {
		const ytlr_result = value;
		const items = [];
		ytlr_result.videos.map((video, index) => {
			const videoId = video.videoId;
			items.push({
				kind: "KabeersMusic#Song",
				etag: makeid(10),
				id: videoId,
				channelId: video.author.url.split("/")[4],
				snippet: {
					publishedAt: video.ago,
					title: video.title,
					description: video.description,
					channelTitle: video.author.name || "From Kabeers Music",
					channelId: video.author.url.split("/")[4],
					duration: video.duration,
					views: video.views,
					thumbnails: {
						default: {
							url: `https://i.ytimg.com/vi/${videoId}/default.jpg`,
							width: 120,
							height: 90
						},
						medium: {
							url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
							width: 320,
							height: 180
						},
						high: {
							url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
							width: 480,
							height: 360
						}
					}
				}
			});
		});
		res.json({
			"kind": "KabeersMusic#searchListResponse",
			"etag": makeid(10),
			"regionCode": "PK",
			"pageInfo": {
				"totalResults": items.length,
			},
			"items": items,
			"accounts": ytlr_result.channels
		});
	}).catch(e => res.status(500).json(e));
});
router.get("/backend/get/artist", (req, res) => {
	/*	if (!req.headers.authorization || !req.query.id) return res.status(402).json("Bad Request");
	jwt.verify(req.headers.authorization.split(" ")[1], "d546fd8RiOe5kf4tiNTv1S4VGhCA", {}, function (err, decoded) {
		if (err || !decoded) return res.status(400).json(err);
		if (!decoded.grant_types.split("|").includes("s564d68a34dCn9OuUNTZRfuaCnwc6:feed")) return res.status(402).json("Invalid Token Scope");
		ytpl(`https://www.youtube.com/channel/${req.query.id}`, function(err, playlist) {
			if(err) throw err;
			res.json(playlist);
		});
	});
	 */
	ytpl(`https://www.youtube.com/channel/${req.query.id}`)
		.then(ytlr_result => {
			const items = [];
			ytlr_result.items.map((video, index) => {
				const videoId = YouTubeGetID(video.url_simple);
				items.push({
					kind: "KabeersMusic#Song",
					etag: makeid(10),
					id: videoId,
					snippet: {
						id: videoId,
						publishedAt: video.uploaded_at,
						channelId: video.author.ref.split("/")[4],
						channelVerified: video.author.verified,
						title: video.title,
						description: video.description,
						thumbnails: {
							"default": {
								"url": `https://i.ytimg.com/vi/${videoId}/default.jpg`,
								"width": 120,
								"height": 90
							},
							"medium": {
								"url": `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
								"width": 320,
								"height": 180
							},
							"high": {
								"url": `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
								"width": 480,
								"height": 360
							}
						},
						channelTitle: video.author.name,
						liveBroadcastContent: video.live,
						"publishTime": "2020-08-22T04:00:05Z"
					}
				});
			});
			ytlr_result.items = items;
			return res.json(ytlr_result);
		})
		.catch(e => res.json(e));
});

router.get("/backend/playlist", (req, res) => {
	ytpl(req.query.playlist, {
		limit: 5
	})
		.then(ytlr_result => {
			const items = [];
			ytlr_result.items.map((video, index) => {
				const videoId = YouTubeGetID(video.url_simple);
				items.push({
					kind: "KabeersMusic#Song",
					etag: makeid(10),
					id: videoId,
					channelId: video.author.ref.split("/")[4],
					snippet: {
						id: videoId,
						publishedAt: video.uploaded_at,
						channelId: video.author.ref.split("/")[4],
						channelVerified: video.author.verified,
						title: video.title,
						description: video.description,
						thumbnails: {
							"default": {
								"url": `https://i.ytimg.com/vi/${videoId}/default.jpg`,
								"width": 120,
								"height": 90
							},
							"medium": {
								"url": `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
								"width": 320,
								"height": 180
							},
							"high": {
								"url": `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
								"width": 480,
								"height": 360
							}
						},
						channelTitle: video.author.name,
						liveBroadcastContent: video.live,
						"publishTime": "2020-08-22T04:00:05Z"
					}
				});
			});
			return res.json({
				id: ytlr_result.id,
				url: ytlr_result.url,
				title: ytlr_result.title,
				visibility: ytlr_result.visibility,
				description: ytlr_result.description,
				total_items: ytlr_result.total_items,
				views: ytlr_result.views,
				last_updated: ytlr_result.last_updated,
				author: {
					id: ytlr_result.author.id,
					name: ytlr_result.author.name,
					avatar: ytlr_result.author.avatar,
					user: ytlr_result.author.user,
					channel_url: ytlr_result.author.channel_url,
					user_url: ytlr_result.author.user_url
				},
				items: items
			});
		}).catch(e => res.status(500).json(e));
});
module.exports = router;
// TODO Because you lisened to travis scott
// Record artist name to database for that user
// Search Yt for artist name
// Show Because You Listened to travis scott
/*
// https://kabeers-auth.herokuapp.com/auth/authorize?client_id=HlgpBwchUuns80ak3kYaEP8IOiDWxRXS840lnnmD&scope=s564d68a34dCn9OuUNTZRfuaCnwc6:feed|s564d68a34dCn9OuUNTZRfuaCnwc6:history.readwrite&response_type=code&redirect_uri=http%3A%2F%2Fdrive.hosted-kabeersnetwork.unaux.com%2Fserver%2Flogin-signup-server.php&state=DJ1-JOt3&nonce=TCN0B06v&prompt=none
var fs = require('fs');

var ps = require('pocketsphinx').ps;

modeldir = "../../pocketsphinx/model/en-us/"

var config = new ps.Decoder.defaultConfig();
config.setString("-hmm", modeldir + "en-us");
config.setString("-dict", modeldir + "cmudict-en-us.dict");
config.setString("-kws", "keyword list");
var decoder = new ps.Decoder(config);

fs.readFile("../../pocketsphinx/test/data/goforward.raw", function(err, data) {
    if (err) throw err;
    decoder.startUtt();
    decoder.processRaw(data, false, false);
    decoder.endUtt();
    console.log(decoder.hyp())
});



                // TODO Feed Generation Here
                // Register Feed if listened more than 4 times
                const schema = {
                    type: 'KabeersMusic#Feed',
                    user_id: 'req.body.userid',
                    items: [
                        {
                            title: 'Because You Listened to ${artist name}',
                            songs: [
                                ...['youtube travis scott search result']
                            ]
                        },
                        {
                            title: 'Because You Listened to ${artist name}',
                            songs: [
                                ...['youtube travis scott search result']
                            ]
                        }
                    ]
                }

 */
const kabeer = {
	"id": "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
	"url": "https://www.youtube.com/playlist?list=PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
	"title": "Latest Videos - Music",
	"visibility": "link only",
	"description": null,
	"total_items": 200,
	"views": 249002544,
	"last_updated": "Updated today",
	"author": {
		"id": "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
		"name": "Music",
		"avatar": "https://yt3.ggpht.com/notrbEhkuo1Z9cIY0aA55jQDMODUOdgW__0nl0kvK2KeOure9BxzmjXnTMGld4tjpPn5QRRI1B0=s100-c-k-c0xffffffff-no-rj-mo",
		"user": null,
		"channel_url": "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
		"user_url": null
	}
};
