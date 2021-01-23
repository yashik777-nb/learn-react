// import logo from "./logo.svg";
// import React, { useState } from "react";
import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      {
        name: "Yash",
        age: 28,
      },
      {
        name: "Sai",
        age: 21,
      },
      {
        name: "Sam",
        age: 32,
      },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 12,
        },
        {
          name: "SaiK",
          age: 22,
        },
        { name: "SamJ", age: 33 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.state({
      persons: [
        {
          name: "Yash",
          age: 12,
        },
        {
          name: "Hello",
          age: 22,
        },
        { name: "SamJ", age: 33 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1> I am a React App</h1>
        <p>This is Working</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        >
          Using State
        </Person>
        <button onClick={this.switchNameHandler.bind(this, "YashIK Bind")}>
          My Button
        </button>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("Sai Uk")}
          changed={this.nameChangedHandler}
        />
        <Person name="Sam" age="32" />
        <Person />
      </div>
    );
  }
}

export default App;
