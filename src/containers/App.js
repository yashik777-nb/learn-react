import React from "react";
import Classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../HigherOrderComponents/withClass";
import Auxillary from "../HigherOrderComponents/Auxillary";
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("[App.JS] Constructor");
    this.state = {
      persons: [
        { id: 1, name: "Yash", age: 28 },
        { id: 2, name: "Sai", age: 21 },
        { id: 3, name: "Sam", age: 32 },
      ],
      showPersons: false,
      showCockPit: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] Get Derieved State From Props", props, state);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] Mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js]: Should Component Update");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] Component Did Update");
  }

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
    console.log("[App.js] Render");
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
      <Auxillary>
        <button
          onClick={() => {
            this.setState({ showCockPit: false });
          }}
        >
          Remove Cokpit
        </button>
        {this.state.showCockPit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            nameHandler={this.toggleNamesHandler}
          />
        ) : null}
        {persons}
      </Auxillary>
    );
  }
}

export default withClass(App, Classes.App);
