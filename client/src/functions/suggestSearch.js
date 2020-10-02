import endPoints from "../api/endpoints/endpoints";
import xml2json from "./Helper/XMLToJSON";
import keys from "../api/keys/keys";
import {initAuth} from "./auth";

export async function SuggestSearch(q, abortController = new AbortController()) {
	const response = await fetch(endPoints.getSuggestionFake(q), {signal: abortController.signal}).then(r => r.text());
	const xmlDoc = xml2json(new DOMParser().parseFromString(response, "text/xml"));
	return xmlDoc.toplevel ? xmlDoc.toplevel.CompleteSuggestion : [];
}
export async function SearchYoutube(q, abortController = new AbortController()) {
	return initAuth()
		.then(token => fetch(endPoints.searchYoutube(keys.youtube, q), {
			headers: new Headers({
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": `Bearer ${token}`
			}),
			signal: abortController.signal
		}).then(r => r.json())).catch(e => e);
}

export async function fetccch() {
	/*    var add = SimpleWorker(function (q) {
			var deferred = Q.defer();

			setTimeout(function () {
				deferred.resolve('200 + 900');
			}, 3000);

			return deferred.promise;
		}, ['https://cdn.jsdelivr.net/gh/kriskowal/q/q.js']);

		var promise = add('travis scott');

		promise.then(function (result) {
			alert(result); // 3
		});

		*/
}

fetccch();
