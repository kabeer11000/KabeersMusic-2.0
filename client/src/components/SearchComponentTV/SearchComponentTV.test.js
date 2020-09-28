import React from "react";
import ReactDOM from "react-dom";
import SearchComponentTV from "./SearchComponentTV";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchComponentTV/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
