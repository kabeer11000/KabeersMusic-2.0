import React from "react";
import ReactDOM from "react-dom";
import home from "./home";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<home/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
