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
    this.setState({
      persons: [
        {
          name: "Yash",
          age: 12,
        },
        {
          name: event.target.value,
          age: 22,
        },
        { name: "SamJ", age: 33 },
      ],
    });
  };

  render() {
    const style = {
      "background-color": "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1> I am a React App</h1>
        <p>This is Working</p>
        <Person
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
        <Person />
        <button
          onClick={this.switchNameHandler.bind(this, "YashIK Bind")}
          style={style}
        >
          My Button
        </button>
      </div>
    );
  }
}

export default App;
