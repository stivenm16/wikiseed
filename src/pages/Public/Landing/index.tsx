import { AboutUs } from "../../../components/AboutUs/AboutUs";
import { Badges } from "../../../components/Badges/Badges";
import Discover from "../../../components/Discover/Discover";
import { Footer } from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import WelcomeContainer from "../../../components/WelcomeContainer/WelcomeContainer";
import "./Landing.scss";
export const Landing = () => {
  return (
    <div className="App">
      <NavBar />
      <WelcomeContainer />
      <Discover />
      <Badges />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Landing;
