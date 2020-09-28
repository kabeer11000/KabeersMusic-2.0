export const createWorker = (e) => {
	const r = new Blob(["self.onmessage = ", e.toString()], {type: "text/javascript"}), t = URL.createObjectURL(r);
	const worker = new Worker(t);
	worker.json = (obj) => {
		if (typeof obj === "object") return postMessage(JSON.stringify(obj).toString());
		return new Error("Property Not an Object");
	};
	worker.end = () => worker.postMessage("end");
	worker.get = worker.onmessage;
	return worker;
};
