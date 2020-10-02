import React from "react";
import ReactDOM from "react-dom";
import CastingDialog from "./CastingDialog";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<CastingDialog/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
