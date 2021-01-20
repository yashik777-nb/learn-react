// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1> I am a React App</h1>
      <p>This is Working</p>
      <Person name="Yash">My Hobbies: Learning </Person>
      <Person name="Sai" />
      <Person />
    </div>
    // return React.createElement('div', null, React.createElement('h1', {className: 'App', "Second Componet"}))
  );
}

export default App;
