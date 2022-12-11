import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login ">
      <div className="left-side">
        <h2>Let's check you plant!</h2>
      </div>
      <div className="form">
        <form action="">
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
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
