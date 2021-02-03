import React from "react";
import PropTypes from "prop-types";
import PersonCSS from "./Person.module.css";
import Auxillary from "../../../HigherOrderComponents/Auxillary.js";
import withClass from "../../../HigherOrderComponents/withClass";
import AuthContext from "../../../context/auth-context";
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  render() {
    console.log("[Person.js] rendering");
    return (
      <Auxillary>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>
          }
        </AuthContext.Consumer> */}
        {/* After React 16.6 */}
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Login</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I am {this.props.name}. I am {this.props.age} years Old.{" "}
          {this.props.children}
        </p>
        <input
          key="i2"
          // ref={(inputEL) => {
          //   this.inputElement = inputEL;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Auxillary>
    );
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
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
