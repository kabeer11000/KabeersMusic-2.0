const dictionary = {
	FETCH_DATA: "FETCH_DATA",
	PARSE_JSON: "PARSE_JSON",
};

function fetchWithTimeOut(url, options, timeout = 7000) {
	return Promise.race([
		fetch(url, options),
		new Promise((_, reject) =>
			setTimeout(() => reject(new Error("timeout")), timeout)
		)
	]);
}

const fetchData = async (d = {url: "", options: {}}) => {
	return postMessage(await fetchWithTimeOut(d.url, d.options, d.timeout).then(value => value.json()).catch(e => e));
};
const parseJson = async (d) => {
	return postMessage(JSON.parse(d));
};


self.addEventListener("message", message => {
	switch (message.data.method) {

	case dictionary.FETCH_DATA:
		return fetchData({url: message.data.url, options: message.data.options});

	case dictionary.PARSE_JSON:
		return parseJson(message.data.json);

	default:
		return null;
	}
});
