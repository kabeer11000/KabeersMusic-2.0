//const worker = new Worker("./assets/webWorker.js");
var w;
const dictionary = {
	FETCH_DATA: "FETCH_DATA",
	PARSE_JSON: "PARSE_JSON",
};

function startWorker() {
	if (typeof (Worker) !== "undefined") {
		if (typeof (w) == "undefined") {
			w = new Worker("./assets/webWorker.js");
		}
		w.postMessage({
			method: dictionary.FETCH_DATA,
			url: "https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/big_json_for_testing/big.json",
			options: {}
		});

		w.onmessage = function (event) {
			console.log(event.data);
		};
	} else {
		console.log("Sorry! No Web Worker support.");
	}
}

function stopWorker() {
	w.terminate();
	w = undefined;
}

startWorker();
