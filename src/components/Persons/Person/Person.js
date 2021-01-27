import React from "react";
import PersonCSS from "./Person.module.css";
export default function Person(props) {
  return (
    <div className={PersonCSS.Person}>
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
