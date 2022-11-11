import React from "react";
import "./MainCard.scss";
import Logo from "../../assets/imgs/logo.png";

type Props = {
  title: string;
  description: string;
};
export default function MainCard({ title, description }: Props) {
  return (
    <div className="card-seed">
      <img src={Logo} alt="" id="strain-card-img" />
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
}
