import React from "react";
import ReactDOM from "react-dom";
import ComingNext from "./ComingNext";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ComingNext/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
