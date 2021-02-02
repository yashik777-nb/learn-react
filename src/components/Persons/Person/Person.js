import React from "react";
import PropTypes from "prop-types";
import PersonCSS from "./Person.module.css";
import Auxillary from "../../../HigherOrderComponents/Auxillary.js";
import withClass from "../../../HigherOrderComponents/withClass";
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

Person.defaultProps = {
  name: "Default",
  age: 0,
};

export default withClass(Person, PersonCSS.Person);
