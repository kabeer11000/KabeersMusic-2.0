import {fetchWithRetry} from "./fetchRetry";

export default function (url, options, timeout = 7000, retry = 2) {
	const abortController = new AbortController();
	return Promise.race([
		fetchWithRetry(url, {...options, signal: abortController.signal}, retry),
		new Promise((_, reject) =>
			setTimeout(() => reject(() => {
				abortController.abort();
				new Error("timeout");
			}), timeout)
		)
	]);
}
