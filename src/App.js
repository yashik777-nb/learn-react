// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
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
  });

  const [counterState, setCounerState] = useState({ counter: 0 });

  console.log(personsState);
  console.log(counterState);

  const increment = () => {
    setPersonsState({
      persons: [
        {
          name: "Yashik",
          age: 12,
        },
      ],
    });
    setCounerState({
      counter: counterState.counter + 1,
    });
  };

  return (
    <div className="App">
      <h1> I am a React App</h1>
      <p>This is Working</p>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        Using State
      </Person>
      <p>Counter: {counterState.counter}</p>
      <button onClick={increment}>My Button</button>
      <Person name="Sai" age="21" />
      <Person name="Sam" age="32" />
    </div>
    // return React.createElement('div', null, React.createElement('h1', {className: 'App', "Second Componet"}))
  );
};

// class App extends React.Component {
//   state = {
//     persons: [
//       {
//         name: "Yash",
//         age: 28,
//       },
//       {
//         name: "Sai",
//         age: 21,
//       },
//       {
//         name: "Sam",
//         age: 32,
//       },
//     ],
//     counter: 0,
//   };

//   increment = () => {
//     this.setState({
//       persons: [
//         {
//           name: "Yashik",
//           age: 12,
//         },
//       ],
//       counter: this.state.counter + 1,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1> I am a React App</h1>
//         <p>This is Working</p>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         >
//           Using State
//         </Person>
//         <p>Counter: {this.state.counter}</p>
//         <button onClick={this.increment}>My Button</button>
//         <Person name="Sai" age="21" />
//         <Person name="Sam" age="32" />
//       </div>
//     );
//   }
// }

export default App;
