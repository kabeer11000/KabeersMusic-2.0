import endPoints from "../../api/endpoints/endpoints";
import {storageIndex} from "../Helper/storageIndex";
import {serialize} from "../Helper/history";

export const makeId = t => {
	let o = "";
	const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let a = 0; a < t; a++) o += r.charAt(Math.floor(Math.random() * r.length));
	return o;
};
export const es = new EventSource(endPoints.castURL);
const userId = JSON.parse(atob(localStorage.getItem(storageIndex.userData))).user_id;
const deviceId = localStorage.getItem(storageIndex.deviceEtag);
/*
es.onmessage = function (event) {
//	alert(event)
};

 */
es.addEventListener(`deviceListUpdate-${userId}`, function (event) {
	localStorage.setItem(storageIndex.castDevices, JSON.stringify(JSON.parse(event.data).activeDevices.filter(e => e !== deviceId)));
	console.log("Cast Event", event);
});
es.addEventListener(`devicePlay-${userId}-${deviceId}`, (e) => alert(`Now Playing ${JSON.parse(e.data).songId}`));
export const registerDeviceCast = async () => {
	await fetch(endPoints.updateActiveDevices, {
		method: "POST",
		headers: new Headers({
			deviceid: localStorage.getItem(storageIndex.deviceEtag),
			userdata: atob(localStorage.getItem(storageIndex.userData)),
		}),
		body: serialize({
			deviceid: localStorage.getItem(storageIndex.deviceEtag),
			userdata: atob(localStorage.getItem(storageIndex.userData)),
		})
	})
		.then(value => value.json())
		.then(value => console.log(value))
		.catch(e => console.log(e));
	return true;
};
export const addDeviceEtag = async () => {
	if (localStorage.getItem(storageIndex.deviceEtag) === null) localStorage.setItem(storageIndex.deviceEtag, makeId(20));
};
export const unRegisterDevice = async () => {
	localStorage.removeItem(storageIndex.castDevices);
	await fetch(endPoints.unregisterDevice, {
		method: "POST",
		headers: new Headers({
			deviceid: localStorage.getItem(storageIndex.deviceEtag),
			userdata: atob(localStorage.getItem(storageIndex.userData)),
		})
	});
	return true;
};
export const sendCast = async (songId, deviceId) => {
	await fetch(endPoints.sendCastPlay, {
		method: "POST",
		headers: new Headers({
			deviceid: deviceId, //JSON.parse(localStorage.getItem(storageIndex.castDevices))[0],
			userdata: atob(localStorage.getItem(storageIndex.userData)),
			songid: songId
		})
	});
	return true;
};
export const castEnabled = localStorage.getItem(storageIndex.castEnabled);
export const getCastDevices = () => JSON.parse(localStorage.getItem(storageIndex.castDevices)) || [];
(async () => {
	addDeviceEtag()
		.then(registerDeviceCast)
		.then(localStorage.setItem(storageIndex.castEnabled, true));
})();
//YqeW9_5kURI

