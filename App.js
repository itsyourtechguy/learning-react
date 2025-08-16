import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", {id: "heading", className: "heading"}, "Hello World from React!");
const h2 = React.createElement("h2", {id: "subheading", className: "subheading"}, "Welcome to React");
const p = React.createElement("p", null, "This is a simple React application.");
const subDiv = React.createElement("div", {id: "content", className: "content"}, p)

const container = React.createElement(
  "div",
  { id: "container", className: "container" },
  [h1, h2, subDiv]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
