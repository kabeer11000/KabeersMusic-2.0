import React from "react";
import ReactDOM from "react-dom";
import SongCard from "./SongCard";

it("It should mount", () => {
	const div = document.createElement("div");
	ReactDOM.render(<SongCard/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
