import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../models/navigationTypes/loggedStackNavigatorTypes";
import { customNavigate } from "../../utilities/constants";
import "./SideBar.scss";
function SideBar() {
  const navigate = useNavigate();

  return (
    <div id={"side-bar"}>
      <ul>
        <li onClick={() => customNavigate(PrivateRoutes.DASHBOARD, navigate)}>
          Seguimiento
        </li>
        <li>Agregar planta</li>
        <li>Analitica</li>
        <li onClick={() => customNavigate(PrivateRoutes.PRIVACY, navigate)}>
          Privacidad
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
