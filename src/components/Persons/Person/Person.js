import React from "react";
import PersonCSS from "./Person.module.css";
class Person extends React.Component {
  render() {
    console.log("[Person.js] rendering");
    return (
      <div className={PersonCSS.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name}. I am {this.props.age} years Old.{" "}
          {this.props.children}
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

Person.defaultProps = {
  name: "Default",
  age: 0,
};

export default Person;
