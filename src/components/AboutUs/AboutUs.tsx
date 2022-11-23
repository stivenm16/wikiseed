import React from "react";
import Leaf from "../../assets/imgs/leaf.png";
import "./AboutUs.scss";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const AboutUs = () => {
  return (
    <div>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div
            id="aboutUs"
            className={isVisible ? "animate__animated animate__fadeInLeft" : ""}
          >
            <div>
              <h3>What about us?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                efficitur odio risus, at auctor felis volutpat vel. Morbi varius
                dignissim erat, nec suscipit quam gravida vitae. Donec est
                massa, luctus nec imperdiet non, suscipit nec arcu. Suspendisse
                et viverra nulla. Suspendisse pretium lacus elit. Phasellus
                lobortis odio turpis, faucibus feugiat tortor semper quis. In et
                pellentesque felis, in lacinia eros. Morbi velit felis, tempor
                eu rhoncus eu, tincidunt nec turpis. Nunc mattis, nunc eu
                fringilla pharetra, dolor est molestie enim, laoreet aliquet
                felis ex nec enim. Aliquam nec euismod erat, vitae bibendum
                nunc. Maecenas sollicitudin tempus libero sed hendrerit. Donec.
                in lacinia eros. Morbi velit felis, tempor eu rhoncus eu,
                tincidunt nec turpis. Nunc mattis, nunc eu fringilla pharetra.
              </p>
            </div>
            <img src={Leaf} alt="" />
          </div>
        )}
      </TrackVisibility>

      <div id="about">E</div>
    </div>
  );
};
