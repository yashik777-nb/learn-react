import "./Person.css";
import React from "react";
import Radium from "radium";

function Person(props) {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name}. I am {props.age} years Old. {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
}

Person.defaultProps = {
  name: "Default",
  age: 0,
};

export default Radium(Person);
