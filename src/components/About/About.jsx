import "./About.css";
import { about } from "../../config";

const About = () => {
  return (
      <div id="about">
          <h2>About</h2>
          <p>{about}</p>
      </div>
  );
};

export default About;
