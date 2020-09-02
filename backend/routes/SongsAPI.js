var express = require('express');
var router = express.Router();
const ytdl = require("ytdl-core");
const
    mongo = require('mongodb'),
    MongoClient = mongo.MongoClient;
const mongo_uri = 'mongodb://127.0.0.1:27017/?readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass%20Community&ssl=false';
var franc = require('franc');
const file_get_contents = require('file-get-contents');
const youtube_key = 'AIzaSyAJkG5coTOfjTRgpYRvCUq0C0V0WFc7tZU';
const endPoints = {
    searchYoutubeMultipleIds: (ids) => `https://www.googleapis.com/youtube/v3/videos?key=${youtube_key}&part=snippet&id=${ids.join(',')}`,
    searchYotubeMultipleIdsFake: (ids) => 'https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/videoIdSearch.json',
    searchYoutube: (q, maxResults = 15) => `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&type=video&key=${youtube_key}&q=${q}&maxResults=${maxResults}`,
    searchYoutubeFake: (q) => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/search-result.json`,
};

router.get('/song', async (req, res) =>
    ytdl
        .getInfo(req.query.id)
        .then(info => {
            const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
            res.set('Cache-Control', 'public, max-age=20000'); //6hrs aprox
            res.json(audioFormats[1].url)
        })
        .catch(err => res.status(400).json(err.message))
);
router.get('/feed', async (req, res) => {
    MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(async (db) => {
            if (db) {
                const dbo = db.db("music");

                const generateRandomHeadline = (name) => {
                    const templates = [`Because You Listened to ${name}`, 'Based on Last Searches', `${name}`];
                    return templates[Math.floor(Math.random() * (+templates.length - +0)) + +0];
                };

                function getMaximum(channelTitles) {
                    let mf = 1, m = 0, item;
                    for (let e = 0; e < channelTitles.length; e++) {
                        for (let l = e; l < channelTitles.length; l++) channelTitles[e] === channelTitles[l] && m++, mf < m && (mf = m, item = channelTitles[e]);
                        m = 0
                    }
                    return {name: item, times: mf}
                }

                const getSearchHistory = async () => {
                    const videoIds = [];
                    dbo.collection("history")
                        .find({user_id: '123456', type: 'watchHistory'}).toArray()
                        .then(value => value.map((v, i) => videoIds.push(v.video_id)));
                    return file_get_contents(endPoints.searchYotubeMultipleIdsFake(await videoIds.join(',')));
                };

                const getByArtist = async () => {
                    let channelTitles = [];
                    await dbo.collection("history")
                        .find({user_id: '123456', type: 'watchHistory'}).toArray()
                        .then(value => value.map((v, i) => channelTitles.push(v.artist_name)));
                    const ListenedMaximum = getMaximum(channelTitles);
                    return {
                        title: `Because You Listened to ${ListenedMaximum.name}`,
                        songs: JSON.parse(await file_get_contents(endPoints.searchYoutube(`${ListenedMaximum.name} music`)))
                    };
                };

                const items = [];
                items.push(await getByArtist());
                res.json({
                    type: 'KabeersMusic#Feed',
                    user_id: '123456',
                    items: items
                });
            }
        });
});

router.post('/history/save', async (req, res) => {
    if (!req.body) return res.status(402).json('402 Bad Request');
    MongoClient.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((db) => {
            if (db) {
                const dbo = db.db("music");
                dbo.collection("history").insertOne({
                    type: "watchHistory",
                    time: req.body.time,
                    user_id: req.body.user_id,
                    video_id: req.body.video_id,
                    artist_name: req.body.artist_name,
                    tags: req.body.tags.split(','),
                    yt_catagory: req.body.yt_catagory,
                    video_title: req.body.video_title,
                    video_keywords: req.body.video_keywords.split(','),
                    language: franc(req.body.video_description) || "en",
                    video_featuring_artists: req.body.video_featuring_artists.split(','),
                }, function (err, result) {
                    if (err) res.json(err);
                    if (result) {
                        res.json(result);
                    }
                });
            }
        }).catch(err => res.status(500).json('Cannot Connect to Database'));
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
