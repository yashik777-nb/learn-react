import React from "react";
import Classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Yash", age: 28 },
      { id: 2, name: "Sai", age: 21 },
      { id: 3, name: "Sam", age: 32 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice();
    // Always copy array and create and new array to avoid immuting. two options splice and spread opearator
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  toggleNamesHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={Classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
