import React from "react";
import ReactDOM from "react-dom";
import DownloadListItem from "./DownloadListItem";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<DownloadListItem/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
