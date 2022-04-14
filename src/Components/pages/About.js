import { Fragment } from "react";
import classes from "../main/Main.module.css";
const About = () => (
  <Fragment>
    <h1>About Me</h1>
    <div className={classes.about}>
      <div>
        <h3>Who am I?</h3>

        <p>
          My name is Adrian. <br></br>I am a sociable person, who like working
          in teams. I am also well-organized and I like prioritising tasks in
          order to obtain the best results.
        </p>
      </div>
      <div>
        <h3>What do I do?</h3>
        <p>
          I am currently an engineer, specialised in plastic melting and
          overmolding.
        </p>
      </div>
      <div>
        <h3>What do I like?</h3>
        <p>
          In my spare time I like riding motorcycles, hanging out with friends
          or watching TV series.
        </p>
      </div>
    </div>
  </Fragment>
);

export default About;
