import { ArrowForwardIosOutlined } from "@mui/icons-material";
type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="Landing">
      <div className="Wrapper">
        <div className="Title">
          <h3 className="Intro">Hi, my name is</h3>
          <h1 className="Name">Philipp Mergener</h1>
          <h1 className="Desc">Front-End Developer</h1>
        </div>
        <p className="ScrollText">
          Scroll down to learn more about me!{" "}
          <ArrowForwardIosOutlined className="Arrow" />
        </p>
      </div>
    </div>
  );
};

export default Landing;
