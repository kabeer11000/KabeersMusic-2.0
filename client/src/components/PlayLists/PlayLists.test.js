import React from "react";
import ReactDOM from "react-dom";
import PlayLists from "./PlayLists";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<PlayLists/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
