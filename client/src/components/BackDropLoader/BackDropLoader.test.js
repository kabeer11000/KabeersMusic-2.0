import React from "react";
import ReactDOM from "react-dom";
import BackDropLoader from "./BackDropLoader";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<BackDropLoader/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
