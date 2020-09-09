import {fetchWithRetry} from "./fetchRetry";

export default function (url, options, timeout = 7000, retry = 2) {
	return Promise.race([
		fetchWithRetry(url, options, retry),
		new Promise((_, reject) =>
			setTimeout(() => reject(new Error("timeout")), timeout)
		)
	]);
}
