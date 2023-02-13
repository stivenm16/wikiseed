import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models/navigationTypes/unloggedStackNavigatorTypes";
import { UserKey } from "../../redux/states/user";
import { clearLocalStorageUser } from "../../utilities/localStorage.utility";

function Logout() {
  const navigate = useNavigate();
  const logOut = () => {
    clearLocalStorageUser(UserKey);
    navigate(`/${PublicRoutes.LOGIN}`);
  };
  return <button onClick={logOut}>Logout</button>;
}

export default Logout;
