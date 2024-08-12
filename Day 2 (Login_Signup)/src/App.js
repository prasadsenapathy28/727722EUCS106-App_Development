import React, { useState } from "react";
import "./styles.css";
import SignInForm from ".//Signin";
import SignUpForm from "./Signup";

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1><br></br><br></br>
              <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Register here!</h1><br></br><br></br>
              <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
