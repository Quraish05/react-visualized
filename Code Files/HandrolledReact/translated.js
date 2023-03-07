import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));
// const h1 = React.createElement("h1", null, "Hello");

//~# JS string Interpolation 
const user = "Jordan Walke";
console.log(`User is ${user}`);

//~! This is not a React expression because its outside JSX 
const result = {
  user
};
console.log(result);

//~* JSX 
const h1 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello JSX handrolled"), /*#__PURE__*/React.createElement("p", null, "User is ", user));
root.render(h1);
