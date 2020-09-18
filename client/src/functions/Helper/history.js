import userId from "../userid";
import commonWords from "./commonWords/commonWords";
import endPoints from "../../api/endpoints/endpoints";
import {initAuth} from "../auth";

async function uniqueText(text) {
    const result = text.toLowerCase()
        .replace(/(?:https?|ftp|http):\/\/[\n\S]+/g, '')
        .replace(/[^\w\d ]/g, '').split(' ');

    return result.filter(function (word) {
        return commonWords.indexOf(word) === -1;
    }).filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
    });
}

/**
 * @param {Object} object
 * @return {string}
 */
export function serialize(object) {
    return Object.entries(object)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

export async function saveHistoryToServer(video, callback = () => {
}) {
    initAuth().then(token => {
        uniqueText(video.snippet.description ? video.snippet.description.substring(0, 100) : "").then(desc => {
            let videoID = "";
            if (typeof video.id === "object") videoID = video.id.videoId;
            if (typeof video.id === "string") videoID = video.id;
            const options = {
                method: "POST",
                body: serialize({
                    time: new Date().getTime(),
                    user_id: userId,
                    video_id: videoID,
                    artist_name: video.snippet.channelTitle,
                    channelId: video.snippet.channelId,
                    tags: video.snippet.tags || [],
                    yt_catagory: 10,
                    video_title: video.snippet.title.replace(/[^a-zA-Z ]/g, ""),
                    video_keywords: [...desc],
                    video_featuring_artists: video.snippet.title.replace(/[^a-zA-Z ]/g, "").split(/ft.|feat.|ft|feat/i) || "",
                    video_description: video.snippet.description ? video.snippet.description.substring(0, 100) : ""
                }),
                headers: new Headers({
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${token}`
                })
            };
            fetch(endPoints.saveWatchHistory, options)
                .then(() => {
                    callback();
                }).catch(function (e) {
                return e;
            });
        })
    });
}

/*
fetch('https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/yt.json')
    .then(value => value.json())
    .then(value => {
        value.items.map(async (v, i) => {
            // await saveHistoryToServer(v);
        })
    });
*/
