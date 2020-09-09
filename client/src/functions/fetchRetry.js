export const fetchWithRetry = (url, options, times = 2) => {
	return new Promise((resolve, reject) => {
		let attempts = 1;
		const fetch_retry = (url, n) => {
			return fetch(url, options).then(resolve).catch(function (error) {
				if (n === 1) reject(error);
				else
					setTimeout(() => {
						attempts++;
						fetch_retry(url, n - 1);
					}, attempts * 3000);
			});
		};
		return fetch_retry(url, times);
	});
};
