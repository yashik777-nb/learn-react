import React from "react";
import Classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  let paragraphClass = [];
  let btnClass = [];
  if (props.persons.length <= 2) paragraphClass.push(Classes.red);
  if (props.persons.length <= 1) paragraphClass.push(Classes.bold);

  if (props.showPersons) btnClass.push(Classes.Red);

  return (
    <div className={Classes.Cockpit}>
      <h1> I am a React App</h1>
      <p className={paragraphClass.join(" ")}>This is Working</p>
      <button className={btnClass.join(" ")} onClick={props.nameHandler}>
        Toggle Names Handler HTML Button
      </button>
    </div>
  );
};

export default Cockpit;
