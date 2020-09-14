import React from "react";
import ReactDOM from "react-dom";
import ArtistComponent from "./ArtistComponent";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ArtistComponent/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
