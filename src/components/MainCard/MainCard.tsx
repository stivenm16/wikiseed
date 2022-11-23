import React from "react";
import "./MainCard.scss";
import Logo from "../../assets/imgs/logo.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

type Props = {
  title: string;
  description: string;
  isVisible: boolean;
};
export default function MainCard({ title, description, isVisible }: Props) {
  return (
    <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
      <div className="card-seed ">
        <img src={Logo} alt="" id="strain-card-img" />
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
