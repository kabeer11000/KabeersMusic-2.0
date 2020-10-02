import React from "react";
import ReactDOM from "react-dom";
import SkeletonList from "./SkeletonList";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<SkeletonList/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
