import endPoints, {hostName} from "../../api/endpoints/endpoints";
import {storageIndex} from "../Helper/storageIndex";
import uniqid from "../Helper/randomKey";
import socketIOClient from "socket.io-client";

const prefix = {
	client2server: `___CLIENT---SERVER___`,
	client: `___CLIENT___`,
};

const socket = socketIOClient(hostName);

const userId = localStorage.getItem(storageIndex.userData) ? JSON.parse(atob(localStorage.getItem(storageIndex.userData))).user_id : null;
const deviceId = localStorage.getItem(storageIndex.deviceEtag) ? localStorage.getItem(storageIndex.deviceEtag) : null;

export const castEvent = new EventSource(endPoints.castURL(userId, deviceId));
export const castEnabled = localStorage.getItem(storageIndex.castEnabled);
castEvent.addEventListener(`pingtest-${deviceId}`, (e) => {
});
const internal = {
	pingReturn: () => fetch(endPoints.castPingTest, {
		method: "POST",
		headers: new Headers({
			deviceid: deviceId,
			userid: userId
		})
	})
};
export const setCastDeviceUpdateListener = (method, callback = () => null) => {
	method ?
		(castEvent.addEventListener(`deviceListUpdate-${userId}`, (e) => e.origin !== hostName ? null :
			(localStorage.setItem(storageIndex.castDevices, JSON.stringify(JSON.parse(e.data).castDevices.filter(e => e !== deviceId))), callback(e)))) :
		(castEvent.removeEventListener(`deviceListUpdate-${userId}`, callback));
};
export const setCastDeviceRemoveListener = (method, callback = () => null) => {
	return method ?
		(castEvent.addEventListener(`devicePlayRemoveListener-${userId}-${deviceId}`, (e) => e.origin !== hostName ? null : callback(e)), localStorage.removeItem(storageIndex.currentlyCasting)) :
		(castEvent.removeEventListener(`devicePlayRemoveListener-${userId}-${deviceId}`, callback));
};
export const setCastDevicePlayListener = (method, callback = () => null) => {
	return method && localStorage.getItem(storageIndex.castEnabled) === "true" ?
		(castEvent.addEventListener(`devicePlay-${userId}-${deviceId}`, (e) => e.origin !== hostName ? null : callback(e)), localStorage.setItem(storageIndex.currentlyCasting, true)) :
		(castEvent.removeEventListener(`devicePlay-${userId}-${deviceId}`, callback));
};
export const registerDeviceCast = async () => {
	return socket.emit("deviceRegister", {
		deviceId: deviceId,
		userId: userId
	});
};
export const addDeviceEtag = async () => {
	if (!localStorage.getItem(storageIndex.deviceEtag)) localStorage.setItem(storageIndex.deviceEtag, uniqid());
};
export const unRegisterDevice = async () => {
	localStorage.removeItem(storageIndex.castDevices);
	return socket.emit("deviceUnregister", {
		deviceId: deviceId,
		userId: userId
	});
};
export const sendCast = async (video, deviceId) => {
	await fetch(endPoints.sendCastPlay, {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/x-www-form-urlencoded",
			remotedeviceid: deviceId,
			deviceid: localStorage.getItem(storageIndex.deviceEtag), //JSON.parse(localStorage.getItem(storageIndex.castDevices))[0],
			userdata: atob(localStorage.getItem(storageIndex.userData)),
			videoelement: JSON.stringify(video)
		}),
		body: {}
	}).then(value => console.log("Cast Sent", value.json()), localStorage.setItem(storageIndex.castingTo, deviceId));
	return true;
};
export const sendPauseCast = async (deviceId) => {
	await fetch(endPoints.sendCastPause, {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/x-www-form-urlencoded",
			remotedeviceid: deviceId,
			deviceid: localStorage.getItem(storageIndex.deviceEtag), //JSON.parse(localStorage.getItem(storageIndex.castDevices))[0],
			userdata: atob(localStorage.getItem(storageIndex.userData)),
		}),
		body: {}
	}).then(value => console.log("Cast Paused", value.json()));
	return true;
};
export const getCastDevices = () => JSON.parse(localStorage.getItem(storageIndex.castDevices)) || [];
export const castSnackbar = {
	setSnackbarKey: key => localStorage.setItem(storageIndex.castSnackbarKey, key),
	getSnackbarKey: () => localStorage.getItem(storageIndex.castSnackbarKey),
	removeSnackbarKey: () => localStorage.removeItem(storageIndex.castSnackbarKey),
};
(async () => {
	addDeviceEtag()
		.then((localStorage.getItem(storageIndex.castEnabled) === "true" ? registerDeviceCast().then(localStorage.setItem(storageIndex.castEnabled, true)) : null));
})();

