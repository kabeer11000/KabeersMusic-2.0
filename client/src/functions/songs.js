import Dexie from "dexie";
import "dexie-observable";
import {fetchProxiedBlob} from "./getBlob";
import endPoints from "../api/endpoints/endpoints";

export const db = new Dexie("KabeersMusic_Songs");
db.version(1).stores({
    songs:
        "id, &videoId, valid, time, rating, blob, state, thumbnail"
});

export async function downloadSong(data = {videoId: null, rating: 0}) {
    try {
        const thumbURL = `https://i.ytimg.com/vi/${data.videoId}/hqdefault.jpg`;
        const url = await fetch(`http://localhost:9000/song?id=${data.videoId}`).then(value => value.json());
        const [thumbnailBlob, songBlob] = await Promise.all([
            fetchProxiedBlob(thumbURL),
            fetchProxiedBlob(url)
        ]);
        db.songs.add({
            id: data.videoId,
            state: "downloaded",
            thumbnail: thumbnailBlob,
            blob: songBlob,
            valid: true,
            time: Date.now(),
            videoId: data.videoId,
            rating: data.rating,
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

export async function getSong(key, id) {
    const
        allSongs = await db.songs.toArray();

    if (allSongs.some(value => value.id === id)) {
        return allSongs.find(value => value.id === id);
    } else {
        return URL.createObjectURL(endPoints.getVideoFake(key, id).blob);
        // return endPoints.getVideo(key, id);
    }
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
