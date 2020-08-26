export function fetchProxiedBlob(url) {
    const URL = url;
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:9000/proxy/" + URL);
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
            xhr.open("GET", "http://localhost:9000/proxy/" + URL);

            xhr.send();
        }, 1000);
    });
}
