export default function Person(props) {
  return (
    <div>
      <p>
        I am {props.name}. I am {Math.floor(Math.random() * 30)} years Old.{" "}
        {props.children}
      </p>
    </div>
  );
}
