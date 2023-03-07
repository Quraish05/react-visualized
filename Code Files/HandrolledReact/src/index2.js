import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Person extends Component {
  constructor(props) {
    super(props);

    //# here we are doing: this.props = props;
    //# we are writing super(props) & passing props to base class
    //% if we dont have constructor at all, then the default constructor of our base class will take care of props
  }

  render() {
    return (
      <h1>
        Hello {this.props.id} from Person {this.props.name}
      </h1>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

const h1 = <h1>Header</h1>;

// root.render(new Person({id: 123, name: "John"}))

root.render(
  <>
    <Person id="et45" name="jdfjkgkj" />
  </>
);
