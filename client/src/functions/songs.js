import Dexie from "dexie";
import "dexie-observable";
import {fetchProxiedBlob} from "./getBlob";
import endPoints from "../api/endpoints/endpoints";

const db_version = 10;
function uniqid(a = "", b = false) {
    const c = Date.now() / 1000;
    let d = c.toString(16).split(".").join("");
    while (d.length < 14) d += "0";
    let e = "";
    if (b) {
        e = ".";
        e += Math.round(Math.random() * 100000000);
    }
    return a + d + e;
}
export const db = new Dexie("KabeersMusic_Songs");
db.version(db_version).stores({
    songs:
        "id, &videoId, valid, time, rating, blob, state, thumbnail"
});
const historydb = new Dexie('KabeersMusic_History');
historydb.version(db_version).stores({
    songs:
        "id, time, rating, thumbnail, channelTitle, title, tags"
});

export async function downloadSong(data = {videoId: null, rating: 0, title: '', channelTitle: '', tags: ''}) {
    try {
        console.log('Download Started');
        const thumbURL = `https://i.ytimg.com/vi/${data.videoId}/hqdefault.jpg`;
        const url = await fetch(endPoints.getProxyfiedURI(data.videoId)).then(value => value.json());
        const [thumbnailBlob, songBlob] = await Promise.all([
            fetchProxiedBlob(thumbURL),
            fetchProxiedBlob(url)
        ]);
        db.songs.put({
            id: data.videoId,
            state: "downloaded",
            thumbnail: thumbnailBlob,
            blob: songBlob,
            valid: true,
            time: Date.now(),
            videoId: data.videoId,
            rating: data.rating,
            tags: data.tags || [],
            title: data.title,
            channelTitle: data.channelTitle,
            videoElement: data.videoElement
        }).then((v) => {
            console.log(v);
        });
        return true;

    } catch (error) {
        return error;
    }
}

export async function getBlob(key) {
    return await db.songs.get(key);
}

export async function getSong(id) {
    return fetch(endPoints.getProxyfiedURI(id)).then(value => value.json()).catch(err => err);
}

export async function getSongFromStorage(id) {
    const
        allSongs = await db.songs.toArray();

    if (allSongs.some(value => value.id === id)) {
        return allSongs.find(value => value.videoId === id);
    } else {
        return fetch(endPoints.getProxyfiedURI(id)).then(value => value.json()).catch(err => err);
    }
}

export async function getAllDownloadedSongs() {
    return db.songs.toArray();
}

export async function getFeed() {
    return fetch(endPoints.getFeed(id)).then(value => value.json()).catch(err => err);
}


console.log('%20 SongJS Loaded');
//downloadSong({rating: 0, videoId:'iYKXdt0LRs8'});


/*
//
// Define your database
//
var db = new Dexie("friend_database");
db.version(1).stores({
    songs:
        "&videoId, valid, time, rating, blob, state, thumbnail"
});

//
// Put some data into it
//
db.songs.put({videoId: "Porno", time: Date.now(), rating:0, valid:1, blob:new Blob(), thumbnail:'123'}).then (function(){
    //
    // Then when data is stored, read from it
    //
    return db.songs.get('Porno');
}).then(function (friend) {
    //
    // Display the result
    //
    alert (JSON.stringify(friend));
}).catch(function(error) {
    //
    // Finally don't forget to catch any error
    // that could have happened anywhere in the
    // code blocks above.
    //
    alert ("Ooops: " + error);
});












        const thumbURL = `https://i.ytimg.com/vi/${data.videoId}/hqdefault.jpg`;
        const url = await fetch(`http://localhost:9000/song?id=${data.videoId}`).then(value => value.json());
        const [thumbnailBlob, songBlob] = await Promise.all([
            fetchProxiedBlob(thumbURL),
            fetchProxiedBlob(url)
        ]);
        db.songs.where('videoId').equals(data.videoId).modify({
            state: "PORN",
            thumbnail: 'thumbnailBlob',
            blob: 'songBlob'
        }).then((v)=>{
            console.log(v);
        });
        return true;

*/
export async function isOfflineAvailable(videoId) {
    let songs = await db.songs.toArray();
    return songs && songs.some(song => song.id === videoId);
}


export async function saveToHistory(object) {
    historydb.songs.put({
        id: uniqid() + uniqid(),
        title: object.title,
        channelTitle: object.ChannelTitle,
        tags: object.tags,
        thumbnail: object.thumbnail,
        time: Date.now(),
        rating: object.rating,
    }).then((v) => {
        console.log(v);
    });
}

export async function getHistory() {
    return historydb.songs.toArray();
}
