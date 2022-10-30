import React from "react";
import "./WelcomeContainer.scss";

export default function WelcomeContainer() {
  return (
    <div id="main-container">
      <div className="img-container">
        <i className="bx bxs-down-arrow" />
        <img src="require('@assets/imgs/logo.png')" alt="" />
      </div>
    </div>
  );
}
