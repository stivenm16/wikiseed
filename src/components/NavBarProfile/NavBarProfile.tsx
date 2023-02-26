// import BabyPlant from "../../assets/imgs/baby-plant.png";
import { Link } from "react-router-dom";
import "./NavBarProfile.scss";

function NavBarProfile() {
  const phase = "Vegetativo";
  const lifeTime = "24";
  return (
    <div id="Nav-bar-profile">
      <Link to={"/login"}>
        <i className="bx bx-leaf" />
      </Link>
      <div id="progress-plant">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <i className="bx bxs-tree-alt"></i>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <i className="bx bxs-tree-alt"></i>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <i className="bx bxs-tree"></i>
        <div>
          <h3>{lifeTime} dias</h3>
          <h5>fase: {phase}</h5>
        </div>
      </div>
      {/* <img src={BabyPlant} id={"baby-plant"}></img> */}
      <div className="user-nav-bar">
        <h3>Username</h3>

        <div>
          <i className="bx bx-user"></i>
        </div>
      </div>
    </div>
  );
}

export default NavBarProfile;
