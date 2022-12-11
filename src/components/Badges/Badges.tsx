import React from "react";
import "./Badges.scss";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Badges = () => {
  return (
    <TrackVisibility partialVisibility>
      {({ isVisible }) => (
        <div
          className={
            isVisible
              ? "badges-container animate__animated animate__fadeDown"
              : "badges-container"
          }
        >
          <h2>Wikiseed wants to help you in</h2>
          <div className="badges">
            <div>
              <span>Bigger plants</span>
              <i className="bx bxs-tree" />
            </div>
            <div>
              <span>Less plagues</span>
              <i className="bx bxs-bug-alt" />
            </div>
            <div>
              <span>Beautiful flowers</span>
              <i className="bx bx-spa" />
              
            </div>
          </div>
        </div>
      )}
    </TrackVisibility>
  );
};
