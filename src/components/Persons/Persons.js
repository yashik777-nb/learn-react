import React from "react";
import Person from "./Person/Person";
class Persons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] Get Derived State From Props", props, state);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] Should Component Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] Get Snapshot Before Update");
    return { message: "Snapshot" };
  }

  render() {
    console.log("[Persons.js] Rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    console.log("[Persons.js] Component Did Mount");
    console.log(snapshot);
  }
}
export default Persons;
