import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="NavBar">
      <div className="Wrapper">
        <div className="Left">
          <h1 className="Logo">&#123; Philipp &#125;</h1>
          <div className="SocialsWrapper">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.github.com/PhilippKNMergener/"
              className="IconWrapper"
            >
              <GitHub className="Icon" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.twitter.com/philipp_knm"
              className="IconWrapper"
            >
              <Twitter className="Icon" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/philipp-mergener-9950271a1/"
              className="IconWrapper"
            >
              <LinkedIn className="Icon" />
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

          <Link href="/ResumePage">
            <button className="ResumeButton">Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
