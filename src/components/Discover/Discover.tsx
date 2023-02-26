import React from "react";
import Logo from "../../assets/imgs/logo.png";
import MainCard from "../MainCard/MainCard";
import "./Discover.scss";
import TrackVisibility from "react-on-screen";
import "animate.css";

interface Fakedata {
  title: string;
  description: string;
}

const fakeData: Fakedata[] = [
  {
    title: "Indica",
    description: "Proin vitae lacinia nibh. Integer dictum nunc et viverra.",
  },
  {
    title: "Sativa",
    description:
      "Donec tempor porttitor nunc, sit amet porttitor ligula placerat.",
  },
  {
    title: "Mix",
    description: "Phasellus congue turpis ut tincidunt aliquet. In id quam.",
  },
];

export default function Discover() {
  return (
    <div id="discover-container">
      <h2 id="discover-title">A big purpose</h2>
      <h3 id="description">
        Feel free to discover new seeds, get informed and more. This project is
        for the cannabis community, we want to support this culture.
      </h3>
      <div className="cards-container">
        {fakeData.map((e, i) => (
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <MainCard
                key={i}
                title={e.title}
                description={e.description}
                isVisible={isVisible}
              />
            )}
          </TrackVisibility>
        ))}
      </div>
    </div>
  );
}
