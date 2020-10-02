import React from "react";
import ReactDOM from "react-dom";
import CustomAppBar from "./CustomAppBar";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<CustomAppBar/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
