import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import WelcomeContainer from "./components/WelcomeContainer/WelcomeContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <WelcomeContainer />
    </div>
  );
}

export default App;
