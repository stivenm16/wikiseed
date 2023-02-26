// import { useCustomNavigate } from "../../../utilities/constants";
import { useNavigate } from "react-router-dom";
import Logout from "../../../components/Logout/Logout";
import Layout from "../Layout/Layout";
import "./Privacy.scss";

function Privacy() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div id="privacy">
        <span>Nombres:</span>
        <span>Apellidos:</span>
        <span>email:</span>
        <span>Tipo de cuenta:</span>
        <span>Cel:</span>
        <span>Ciudad:</span>
        <Logout />
      </div>
    </Layout>
  );
}

export default Privacy;
