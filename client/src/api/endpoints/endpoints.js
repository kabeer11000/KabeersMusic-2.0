//const hostName = `${window.location.protocol}//${window.location.host}`;
const hostName = `${window.location.protocol}//${window.location.hostname}:9000`;

const endPoints = {
    mostPopular: key => `https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=${key}&chart=mostPopular`,
    mostPopularFake: key => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/yt.json`,
    getVideo: (key, id) => `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`,
    getVideoFake: (key, id) => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response@master/yt-api/video-.json`,
    getProxyfiedURI: (id) => `${hostName}/api/song?id=${id}`,
    getSuggestion: (q) => `https://suggestqueries.google.com/complete/search?`,
    getSuggestionFake: (q) => `https://cors-anywhere.herokuapp.com/http://clients1.google.com/complete/search?hl=en&output=toolbar&q=${q}`,
    searchYoutube: (key, q, maxResults = 15) => `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&type=video&key=${key}&q=${q}&maxResults=${maxResults}`,
    searchYoutubeFake: (key, q) => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/search-result.json`,
    proxyURI: (url) => `${hostName}/proxy/${url}`,
    saveWatchHistory: `${hostName}/api/history/save`,
    saveSearchHistory: `${hostName}/api/search/save`,
    getFeed: `${hostName}/api/feed`
};
module.exports = endPoints;
