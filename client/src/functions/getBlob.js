import endPoints from "../api/endpoints/endpoints";
import {initAuth} from "./auth";

export function fetchProxiedBlob(url) {
    const URL = url;
    return new Promise(function (resolve, reject) {
        return initAuth().then((token) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", endPoints.proxyURI(URL));
            xhr.responseType = "blob";
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
            xhr.onload = function () {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.send();
            setTimeout(() => {
                xhr.abort();
                xhr.open("GET", endPoints.proxyURI(URL));

                xhr.send();
            }, 1000);
        });
    });
}
