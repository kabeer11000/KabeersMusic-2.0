import Dexie from "dexie";
import "dexie-observable";
import {fetchProxiedBlob} from "./getBlob";
import endPoints from "../api/endpoints/endpoints";
import userid from "./userid";
import {initAuth} from "./auth";
import fetch from "./fetchWithTimeOut";

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

export function login() {
    const tokens = localStorage.getItem('tokens');
    if (!tokens) {
        const info = {
            clientId: 'S565ds6887df646k5Y4f56IOiDWxRXS840lnnmD',
            scopes: ['s564d68a34dCn9OuUNTZRfuaCnwc6:feed', 's564d68a34dCn9OuUNTZRfuaCnwc6:history.readwrite'].join('|'),
            callback: encodeURI('http://localhost:3000/auth/callback')
        };
        const authUrl = `https://kabeers-auth.herokuapp.com/auth/authorize?client_id=${info.clientId}&scope=${info.scopes}&response_type=code&redirect_uri=${info.callback}&state=L8eEgLQZ&nonce=saPP_xyt&prompt=none`;


    }
}

export async function downloadSong(data = {videoId: null, rating: 0, title: '', channelTitle: '', tags: ''}) {
    try {

        console.log('Download Started');
        const thumbURL = `https://i.ytimg.com/vi/${data.videoId}/hqdefault.jpg`;
        const url = await fetch(endPoints.getProxyfiedURI(data.videoId)).then(value => value.json()).catch(e => e);
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
    return initAuth().then(token => {
        if (!navigator.onLine) return new Error('No Connection');
        return fetch(endPoints.getProxyfiedURI(id), {
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        }, 5000).then(value => {
            if (!value.ok) return null;
            return value.json();
        }).catch(e => e);
    });
}


initAuth().then(token => {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:9000/api/test", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
});


export async function getSongFromStorage(id) {
    const
        allSongs = await db.songs.toArray();

    if (allSongs.some(value => value.id === id)) {
        return allSongs.find(value => value.videoId === id);
    } else {
        return initAuth().then(token => {
            fetch(endPoints.getProxyfiedURI(id), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(value => {
                if (!value.ok) return null;
                return value.json();
                // throw new Error('Invalid Response');
            });
        });
    }
}

export async function getAllDownloadedSongs() {
    return db.songs.toArray();
}

export async function getFeed() {
    return initAuth().then(token => {
        fetch(endPoints.getFeed(userid), {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(value => value.json()).catch(err => err);
    });
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
