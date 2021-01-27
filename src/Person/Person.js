// import "./Person.css";
import React from "react";
// import Radium from "radium";
import Styled from "styled-components";

const StyleDiv = Styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px) {
          width: 450px;
        },
`;

export default function Person(props) {
  // const style = {
  //   "@media(min-width: 500px)": {
  //     width: "450px",
  //   },
  // };
  return (
    <StyleDiv>
      <p onClick={props.click}>
        I am {props.name}. I am {props.age} years Old. {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </StyleDiv>
  );
}

Person.defaultProps = {
  name: "Default",
  age: 0,
};

// export default Radium(Person);
