const endPoints = {
    mostPopular: key => `https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=${key}&chart=mostPopular`,
    mostPopularFake: key => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/yt.json`,
    getVideo: (key, id) => `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`,
    getVideoFake: (key, id) => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response@master/yt-api/video-.json`,
    getProxyfiedURI: (id) => `http://localhost:5000/song?id=${id}`,
};
module.exports = endPoints;
