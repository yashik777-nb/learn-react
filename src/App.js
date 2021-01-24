// import logo from "./logo.svg";
// import React, { useState } from "react";
import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Yash",
        age: 28,
      },
      {
        id: 2,
        name: "Sai",
        age: 21,
      },
      {
        id: 3,
        name: "Sam",
        age: 32,
      },
    ],
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 12,
  //       },
  //       {
  //         name: "SaiK",
  //         age: 22,
  //       },
  //       { name: "SamJ", age: 33 },
  //     ],
  //   });
  // };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice();
    // Always copy array and create and new array to avoid immuting. twp options splice and spread opearator
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}
          >
            Using State
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("Sai Uk")}
            changed={this.nameChangedHandler}
          />
          <Person name="Sam" age="32" />
          <Person /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> I am a React App</h1>
        <p>This is Working</p>
        {/* <button
          onClick={this.switchNameHandler.bind(this, "YashIK Bind")}
          style={style}
        >
          Switch Names handler Button
        </button> */}
        <button onClick={this.toggleNamesHandler} style={style}>
          Toggle Names Handler Button
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
