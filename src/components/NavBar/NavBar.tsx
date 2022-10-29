import { useState } from "react";
import "./NavBar.scss";

export default function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  let clasName = isMenuActive ? "menu-btn" : "menu-btn active";

  let handleToggle = () => {
    setIsMenuActive(!isMenuActive);
    console.log(clasName);
  };
  return (
    <div id="nav-bar">
      <div>
        <i className="bx bx-leaf" id="logo" />
        <h2>Wikiseed</h2>
      </div>
      <div onClick={handleToggle} className={clasName}>
        <div className="menu-btn__burguer"></div>
      </div>
      {/* <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Wiki</li>
        <li>Support us</li>
      </ul> */}
    </div>
  );
}
