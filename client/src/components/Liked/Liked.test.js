import React from "react";
import ReactDOM from "react-dom";
import Liked from "./Liked";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Liked/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
