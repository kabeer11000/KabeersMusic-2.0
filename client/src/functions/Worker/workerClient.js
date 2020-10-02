import {FUNCTION, registerWorker} from "worka";
import {PromiseWorker as MainWorker} from "./PromiseWorker";

const worker = registerWorker({
	name: "MainWorker",
	resource: MainWorker,
	loadMode: FUNCTION,
});
export default worker;
