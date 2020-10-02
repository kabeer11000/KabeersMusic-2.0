import React from "react";
import ReactDOM from "react-dom";
import CastComponent from "./CastComponent";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<CastComponent/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
