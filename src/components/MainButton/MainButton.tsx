import React from "react";
import "./MainButton.scss";

type Props = {
  scrollId: string;
};
export default function MainButton({ scrollId }: Props) {
  return (
    <>
      <a href={`#${scrollId}`} className="main-btn">
        <span>Discover</span>
        <i className="bx bx-spa"></i>
      </a>
    </>
  );
}
