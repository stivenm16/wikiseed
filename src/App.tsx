import { useState } from "react";
import "./App.scss";
import Discover from "./components/Discover/Discover";
import NavBar from "./components/NavBar/NavBar";
import WelcomeContainer from "./components/WelcomeContainer/WelcomeContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeContainer />
      <Discover />
    </div>
  );
}

export default App;
