import endPoints from "../api/endpoints/endpoints";
import fetch from "./fetchWithTimeOut";
import {storageIndex} from "./Helper/storageIndex";

const cookies = {
	getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},
	setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
};

export async function initAuth() {
	let token = cookies.getCookie("token");
	if (!token) return window.location.href = endPoints.authRedirect;
	token = JSON.parse(token);
	if (Math.floor(((Date.now() - token.exp) / 1000) / 60) > 120) { // Two Hours
		return await fetch(endPoints.refreshToken, {}, 5000).then(res => res.ok ? res.json() : null);
	} // Expired
	return token.token; // Return Token
}

(async () => {
	if (cookies.getCookie("user_data_token") && localStorage.getItem(storageIndex.userData) === null || undefined) {
		fetch("http://localhost:9000/auth/user/data", {
			headers: new Headers({
				"IdToken": JSON.parse(cookies.getCookie("user_data_token")).token
			})
		})
			.then(res => res.json())
			.then(userData => localStorage.setItem(storageIndex.userData, btoa(JSON.stringify(userData))))
			.catch(e => console.log(e));
	}
})();
//export async function initAuth() {
//     let a = cookies.getCookie("token");
//     return a ? ((a = JSON.parse(a)), 30 < Math.floor((Date.now() - a.exp) / 1e3 / 60) ? await fetch(endPoints.refreshToken, {}, 5e3).then((a) => (a.ok ? a.json() : null)) : a.token) : (window.location.href = endPoints.authRedirect);
// }
