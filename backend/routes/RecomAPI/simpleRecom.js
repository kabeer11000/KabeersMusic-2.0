var express = require("express");
var router = express.Router();
const
	mongo = require("mongodb"),
	MongoClient = mongo.MongoClient;
const mongo_uri = require("../../keys/mongokey");


router.get("/", (req, res) => {
	MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(async (db) => {
			if (!db) return res.status(500).json("Internal Server Error");
			const dbo = db.db("music");
			dbo.collection("history")
				.find({
					user_id: "b4000376114184b38e2f00e43b070a9fe239457d",
					type: "watchHistory",
				})
				.sort({timeStamp: -1}).limit(10).toArray()
				.then((results) => {
					/*
					    Results .map push to seprate array for keywords and video ids
					 */

					const historyKeywords = results.map((object, index) => ({
						videoId: object.video_id,
						keyWords: object.video_keywords
					})).flat().filter((item, pos, self) => self.indexOf(item) === pos);
					dbo.collection("history").find({
						// TODO uncomment karnay par us user ki history nahi check karay ga
						/*
						user_id: {
							$not: {
								$gt: "b4000376114184b38e2f00e43b070a9fe239457d",
							}
						},
						video_id: {
							$not: {
								$in: [...historyKeywords.map(video => video.videoId)],
							}
						},
						*/
						type: "watchHistory",
						video_keywords: {
							$elemMatch: {
								$in: [...historyKeywords.map(video => video.keyWords)].flat() // Fatten Array
							}
						}
					}).sort({timeStamp: -1}).limit(10).toArray()
						.then(recom => recom ? (
							res.json(
								recom.map(v => v.artist_name)
							)
						) : res.json("Nothing Found"))
						.catch(e => res.json(e));
				}).catch(e => res.json(e));
		}).catch(e => res.json(e));
});

module.exports = router;
/*
				.find({type: "watchHistory", "video_keywords": {$elemMatch: {$elemMatch: {$in: ["carrot"]}}}})
				.find({type: "watchHistory"}).toArray();

 */
