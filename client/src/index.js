import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {SnackbarProvider} from "notistack";
import socketIOClient from "socket.io-client";
import {hostName} from "./api/endpoints/endpoints";

if (process.env.NODE_ENV !== "development") {
	serviceWorker.unregister();
	console.log = () => {
	};
}
const socket = socketIOClient(hostName);
socket.on("FromAPI", data => {
	console.log(data);
});
ReactDOM.render(
	<React.Fragment>
		<SnackbarProvider maxSnack={1}>
			<App/>
		</SnackbarProvider>
	</React.Fragment>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
