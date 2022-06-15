import type { NextPage } from "next";
import NavBar from "../components/NavBar/NavBar";

const Home: NextPage = () => {
  return (
    <div className="HomePage">
      <NavBar />
      <div className="Landing">
        <div className="Wrapper">
          <div className="Title">
            <h3 className="Intro">Hi, my name is</h3>
            <h1 className="Name">Philipp Mergener</h1>
            <h4 className="Activites">
              I like to <span className="TypingText"></span>
            </h4>
          </div>
          <p className="ScrollText">Scroll down for more about me!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
