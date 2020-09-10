import endPoints from "../api/endpoints/endpoints";
import xml2json from "./Helper/XMLToJSON";
import keys from "../api/keys/keys";


export async function SuggestSearch(q) {
    const response = await fetch(endPoints.getSuggestionFake(q)).then(r => r.text());
    const xmlDoc = xml2json(new DOMParser().parseFromString(response, "text/xml"));
    return xmlDoc.toplevel ? xmlDoc.toplevel.CompleteSuggestion : [];

}

export async function SearchYoutube(q) {
    return fetch(endPoints.searchYoutube(keys.youtube, q)).then(r => r.json());
}
