import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models/navigationTypes/unloggedStackNavigatorTypes";
import { resetUser, UserKey } from "../../redux/states/user";
import { clearLocalStorageUser } from "../../utilities/localStorage.utility";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    clearLocalStorageUser(UserKey);
    dispatch(resetUser());
    navigate(`/wiseed/${PublicRoutes.LOGIN}`, { replace: true });
  };
  return <button onClick={logOut}>Logout</button>;
}

export default Logout;
