import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import EditProject from "./EditProject";

describe(`EditProject component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <EditProject />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});