import endPoints from "../api/endpoints/endpoints";
import xml2json from "./Helper/XMLToJSON";
import keys from "../api/keys/keys";
import {initAuth} from "./auth";


export async function SuggestSearch(q) {
    const response = await fetch(endPoints.getSuggestionFake(q)).then(r => r.text());
    const xmlDoc = xml2json(new DOMParser().parseFromString(response, "text/xml"));
    return xmlDoc.toplevel ? xmlDoc.toplevel.CompleteSuggestion : [];

}

export async function SearchYoutube(q) {
    return initAuth()
        .then(token => fetch(endPoints.searchYoutube(keys.youtube, q), {
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`
            })
        }).then(r => r.json())).catch(e => e);
}
