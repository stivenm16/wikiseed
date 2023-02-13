import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../../commons/Logo/Logo";
import { PrivateRoutes } from "../../../models/navigationTypes/loggedStackNavigatorTypes";
import { createUser } from "../../../redux/states/user";
import getMorty from "../../../services/auth.service";
import "./Login.scss";

function Login() {
  const [isRegistered, setIsRegistered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };
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
              {isRegistered
                ? "Create an account"
                : "I'm already have an account"}
            </h5>
          </form>
          <button onClick={login}>Hack</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
