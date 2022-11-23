import React from "react";
import "./WelcomeContainer.scss";
import Logo from "../../assets/imgs/logo.png";
import MainButton from "../MainButton/MainButton";
import TrackVisibility from "react-on-screen";
import "animate.css";

export default function WelcomeContainer() {
  return (
    <div id="main-container">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <img
            src={Logo}
            alt=""
            id="logo-main"
            className={isVisible ? "animate__animated animate__fadeInDown" : ""}
          />
        )}
      </TrackVisibility>
      <h1 id="main-title">The first cannabis open source project</h1>
      <h3 id="hero-description">
        Cras sed metus vel magna ultricies rhoncus in a velit. Duis euismod
        dictum quam vitae disgnissim. Sed lacus sapien, accumsan eu mi quis.
      </h3>
      <MainButton scrollId={"discover-container"} />
    </div>
  );
}
