import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="NavBar">
      <div className="Wrapper">
        <div className="Left">
          <h1 className="Logo">Philipp.</h1>
          <div className="SocialsWrapper">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.github.com/PhilippKNMergener/"
              className="Icon"
            >
              <FiGithub />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.twitter.com/philipp_knm"
              className="Icon"
            >
              <FiTwitter />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/philipp-mergener-9950271a1/"
              className="Icon"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
        <div className="Right">
          <div className="LinkWrapper">
            <a href="#" className="Link">
              About
            </a>
            <a href="#" className="Link">
              Projects
            </a>
            <a href="#" className="Link">
              Contact
            </a>
          </div>
          <button className="ResumeButton">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
