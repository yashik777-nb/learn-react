import React, { PureComponent } from "react";
import Person from "./Person/Person";
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] Get Derived State From Props", props, state);
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js]:Component Will Recieve Props");
  // }

  componentWillUnmount() {
    console.log("[Persons.js]: Componenet Will Unmount");
  }

  // Instead of checking all the props implement Pure Component that implements
  // the shouldComponentUpdate lifecycle method and also does the props check.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] Should Component Update");
  //   // this is a pointer comparision
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   )
  //     return true;
  //   else return false;
  // }

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

  // UNSAFE_componentWillUpdate() {
  //   console.log("[Persons.js]: Component Will Update");
  // }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    console.log("[Persons.js] Component Did Mount");
    console.log(snapshot);
  }
}
export default Persons;
