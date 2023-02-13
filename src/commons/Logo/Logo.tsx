import { Link } from "react-router-dom";
import "./Logo.scss";

function Logo() {
  return (
    <div id="logo">
      <Link to={"/wikiseed/"}>
        <i className="bx bx-leaf" />
        <h2 id="title-logo">Wiseed</h2>
      </Link>
    </div>
  );
}

export default Logo;
