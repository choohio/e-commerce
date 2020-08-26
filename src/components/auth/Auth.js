import React, { useState } from "react";
import logo from "../../imgs/logo.svg";

const Auth = () => {
  const [submitVal, setSubmitVal] = useState("Login");
  const optionsClick = (e) => {
    console.log(e.target.id);
    setSubmitVal(e.target.id);
  };

  // Classes
  let loginClass =
    submitVal === "Login"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";

  let signupClass =
    submitVal === "Signup"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";
  return (
    <div>
      <div className="auth__options">
        <div className={loginClass} id="Login" onClick={(e) => optionsClick(e)}>
          Login
        </div>
        <div
          className={signupClass}
          id="Signup"
          onClick={(e) => optionsClick(e)}
        >
          Signup
        </div>
      </div>
      <div className="auth">
        <img className="auth__header" src={logo} alt="logo" />
        <form className="auth__form">
          <input
            className="auth__form--input"
            type="text"
            placeholder="email"
          />
          <input
            className="auth__form--input"
            type="password"
            placeholder="password"
          />
          <input
            className="auth__form--submit"
            type="submit"
            value={submitVal}
          />
        </form>
      </div>
    </div>
  );
};

export default Auth;
