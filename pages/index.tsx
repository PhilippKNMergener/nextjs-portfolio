import type { NextPage } from "next";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";

const Home: NextPage = () => {
  return (
    <div className="HomePage">
      <NavBar />
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
