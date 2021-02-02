import React from "react";
// import PersonCSS from "./Person.module.css";
import Auxillary from "../../../HigherOrderComponents/Auxillary.js";
class Person extends React.Component {
  render() {
    console.log("[Person.js] rendering");
    return (
      <Auxillary>
        <p key="i1" onClick={this.props.click}>
          I am {this.props.name}. I am {this.props.age} years Old.{" "}
          {this.props.children}
        </p>
        <input
          key="i2"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Auxillary>
    );
  }
}

Person.defaultProps = {
  name: "Default",
  age: 0,
};

export default Person;
