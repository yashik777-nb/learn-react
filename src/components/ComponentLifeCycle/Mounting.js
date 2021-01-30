import React from "react";

class Mounting extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  static getDerievedStateFromProps(props, state) {
    console.log("Get Derieved State from Props");
    console.log("This is legacy");
  }

  render() {
    console.log("Render");
    return <p>Render Method</p>;
  }

  componentDidMount() {
    console.log("Component did Mount");
  }
}

export default Mounting;
