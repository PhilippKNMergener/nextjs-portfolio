import type { NextPage } from "next";
import AboutMe from "../components/AboutMe/AboutMe";
import Landing from "../components/Landing/Landing";
import NavBar from "../components/NavBar/NavBar";

const Home: NextPage = () => {
  return (
    <div className="HomePage">
      <NavBar />
      <Landing />
      <AboutMe />
    </div>
  );
};

export default Home;
