import { useState } from "react";
import "./App.scss";
import Discover from "./components/Discover/Discover";
import NavBar from "./components/NavBar/NavBar";
import WelcomeContainer from "./components/WelcomeContainer/WelcomeContainer";
import TrackVisibility from "react-on-screen";
import Logo from "./assets/imgs/logo.png";
import { Badges } from "./components/Badges/Badges";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeContainer />
      <Discover />
      <Badges />
      <AboutUs />
    </div>
  );
}

export default App;
