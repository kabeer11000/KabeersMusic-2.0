console.log("request Recieved");
const workerFetch = ({method = "get", url = "", data = {}, listener = ""}) => {
	console.log("request Recieved");
	fetch({method, url, data})
		.then(({data}) => {
			self.postMessage({cmd: `worker_fetch_${listener}`, success: true, data});
		})
		.catch(error => {
			self.postMessage({cmd: `worker_fetch_${listener}`, success: false, data: error});
		});
};

self.addEventListener(
	"message",
	({data}) => {
		switch (data.cmd) {
		case "worker_fetch":
			workerFetch(data.payload);
			break;
		default:
			return null;
		}
	},
	false
);

