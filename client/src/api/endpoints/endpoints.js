const hostName = `${window.location.protocol}//${window.location.host}`;
//const hostName = `${window.location.protocol}//${window.location.hostname}:9000`;

const endPoints = {
    hostName: hostName,
    getUserData: `${hostName}/auth/user/data`,
    mostPopular: key => `https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=${key}&chart=mostPopular`,
    mostPopularFake: key => `${hostName}/files/yt-fake/sample-response-master/yt-api/yt.json`,
    //getVideo: (key, id) => `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`,
    //getVideoFake: (key, id) => `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response@master/yt-api/video-.json`,
    getProxyfiedURI: (id) => `${hostName}/api/song?id=${id}`,
    getSuggestion: (q) => `https://suggestqueries.google.com/complete/search?`,
    getSuggestionFake: (q) => `https://cors-anywhere.herokuapp.com/http://clients1.google.com/complete/search?hl=en&output=toolbar&q=${q}`,
    searchYoutube: (key, q) => `${hostName}/api/search?q=${q}`,
    searchYoutubeFake: (key, q) => `${hostName}/files/yt-fake/sample-response-master/yt-api/search-result.json`,
    proxyURI: (url) => `${hostName}/proxy/${url}`,
    saveWatchHistory: `${hostName}/api/history/save`,
    saveSearchHistory: `${hostName}/api/search/save`,
    getFeed: () => `${hostName}/api/feed`,
    getFeedFake: () => `${hostName}/files/yt-fake/sample-response-master/yt-api/suggested-cardib.json`,
    authRedirect: `${hostName}/auth/redirect`,
    refreshToken: `${hostName}/auth/store/tokens/refresh`,
    getSearchFeed: () => `${hostName}/api/feed/search`,
    getTopArtistFeed: () => `${hostName}/api/feed/topartist`,
    getPlayListById: (id) => `${hostName}/api/backend/playlist?playlist=${id}`,
    getPlayListByIdSearchFallback: (id) => `${hostName}/api/backend/search?q=${id}&playListMode=true`,
    getFeedArtists: `${hostName}/api/feed/artists/all`,
    getArtistInfo: (id) => `${hostName}/api/backend/get/artist?id=${id}`
};
module.exports = endPoints;
