import React from "react";
import ReactDOM from "react-dom/client";

function Person(props) {
  return <h1>Hello Function {props.name}</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Person name="Tom" />
);
