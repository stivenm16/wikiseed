import React from "react";
import "./Footer.scss";

export const Footer = () => {
  const footerLinks = [
    {
      icon: "bx bxl-github",
      href: "https://github.com/stivenm16",
    },
    {
      icon: "bx bxl-instagram",
      href: "https://twitter.com/kevup_",
    },
    {
      icon: "bx bxl-linkedin-square",
      href: "https://www.linkedin.com/in/kevinhernandez0/",
    },
  ];
  return (
    <div>
      <div className="footer box">
        <div className="footer get-in-touch">
          <q>
            The illegality of cannabis is outrageous, an impediment to full
            utilization of a drug which helps produce the serenity and insight,
            sensitivity and fellowship so desperately needed in this
            increasingly mad and dangerous world.
          </q>
          <p> Carl Sagan</p>
          <p>
            If you want to contribute to this project, you can reach us here!
          </p>
          <i className="bx bx-down-arrow-alt mobile" />
        </div>
        <div className="footer social-media">
          <ul>
            {footerLinks.map((e, i) => (
              <li key={i}>
                <a href={e.href} target={"_blank"}>
                  <i className={e.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
