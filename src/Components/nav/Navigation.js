import { NavLink } from "react-router-dom";
import classes from "./Top.module.css";

const Navigation = () => (
  <nav>
    <ul className={classes.navigation}>
      <li>
        <NavLink exact activeClassName="current" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/work">
          Work Experience
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/education">
          Education
        </NavLink>
      </li>
      {/* <li>
        <NavLink exact activeClassName="current" to="/hobbies">
          Hobbies 
        </NavLink>
      </li> */}
    </ul>
  </nav>
);

export default Navigation;
