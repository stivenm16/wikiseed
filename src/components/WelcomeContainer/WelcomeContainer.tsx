import React from "react";
import "./WelcomeContainer.scss";
import Logo from "../../assets/imgs/logo.png";

export default function WelcomeContainer() {
  return (
    <div id="main-container">
      <h1 id="main-title">Welcome to Wikiseed!</h1>
      <div className="img-container">
        <i className="bx bxs-down-arrow" />
        <img src={Logo} alt="" id="logo-main" />
      </div>
    </div>
  );
}
