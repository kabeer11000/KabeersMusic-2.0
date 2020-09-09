export const PromiseWorker = (message) => {
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

	const fetchData = (d = {url: "", options: {}, timeout: 7000}) => {
		return fetch(d.url, d.options);
	};
	const parseJson = (d) => {
		return JSON.parse(d);
	};


	switch (message.method) {

	case dictionary.FETCH_DATA:
		return fetchData({url: message.url, options: message.options, timeout: message.timeout});

	case dictionary.PARSE_JSON:
		return parseJson(message.json);

	default:
		return null;
	}

};
