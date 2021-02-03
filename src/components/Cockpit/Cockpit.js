import React, { useEffect, useRef, useContext } from "react";
import Classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";
const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  const authContext = useContext(AuthContext);

  // This function runs for every Render method invocation
  // Component Did Mount and Component Did Update in a sinngle effect
  // For the use effect method to run only once pass an empty arrray
  // return executes when unmounted
  // rest of the code executes when mounted
  useEffect(() => {
    console.log("[Cockpit.js]: Use  Effect.");
    // HTTP Request
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    // toggleButtonRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js]: Cleanup Work");
    };
  }, []);

  // Runs for evvery update cycle
  useEffect(() => {
    console.log("[Cockpit.js]: 2nd Use Effect");
    return () => console.log("[Cockpit.js]: Cleanup Work in 2nd Use Effect");
  });

  let paragraphClass = [];
  let btnClass = [];
  if (props.personsLength <= 2) paragraphClass.push(Classes.red);
  if (props.personsLength <= 1) paragraphClass.push(Classes.bold);

  if (props.showPersons) btnClass.push(Classes.Red);

  return (
    <div className={Classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={paragraphClass.join(" ")}>This is Working</p>
      <button
        ref={toggleButtonRef}
        className={btnClass.join(" ")}
        onClick={props.personHandler}
      >
        Toggle Names Handler HTML Button
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
