export default function Person(props) {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name}. I am {props.age} years Old. {props.children}
      </p>
      <input type="text" onChange={props.changed}></input>
    </div>
  );
}

Person.defaultProps = {
  name: "Default",
  age: 0,
};
