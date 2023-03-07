import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
// const h1 = React.createElement("h1", null, "Hello");

//~# JS string Interpolation
const user = "Jordan Walke";
console.log(`User is ${user}`);

//~! This is not a React expression because its outside JSX
const result = { user };
console.log(result);

//~* JSX
const myStyle = {
  backgroundColor: "lightgreen",
  color: "charcoal",
  padding: "1rem",
};

// |                                |
//            expression
// {  { backgroundColor: "yellow" } }
//    ^                           ^
//    |                           |
//             object

const h1 = (
  <div>
    <h1 style={myStyle}>Hello JSX handrolled</h1>
    <h2 style={{ backgroundColor: "yellow" }}>User is {user}</h2>
  </div>
);
root.render(h1);
