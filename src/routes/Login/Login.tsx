import React, { useState } from "react";
import Logo from "../../commons/Logo/Logo";
import "./Login.scss";

function Login() {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleToggleForm = () => {
    setIsRegistered(!isRegistered);
  };
  return (
    <div className="login ">
      <div className="left-side">
        <h2>Let's check you plant!</h2>
      </div>
      <div className="main-container">
        <Logo />
        <div className="form">
          <form action="">
            {!isRegistered ? (
              <div className="form-container">
                <p>Sign up and grow your plants with us!</p>
                <div>
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">User</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>
                <button>Sign up</button>
              </div>
            ) : (
              <div className="form-container">
                <p>It's time to check your plants</p>

                <div>
                  <label htmlFor="">User</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>
                <button>Sign in</button>
              </div>
            )}
            <h5 onClick={handleToggleForm} id={"registered-acc"}>
              I'm already have an account
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
