import React from "react";
import ReactDOM from "react-dom";
import HideOnScroll from "./HideOnScroll";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<HideOnScroll/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
