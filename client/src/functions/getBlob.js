import endPoints from "../api/endpoints/endpoints";

export function fetchProxiedBlob(url) {
    const URL = url;
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", endPoints.proxyURI(URL));
        xhr.responseType = "blob";
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
}
