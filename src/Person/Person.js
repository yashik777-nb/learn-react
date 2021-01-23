export default function Person(props) {
  return (
    <div>
      <p>
        I am {props.name}. I am {props.age} years Old. {props.children}
      </p>
    </div>
  );
}
