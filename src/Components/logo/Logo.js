import { NavLink } from "react-router-dom";
import logo from "../../Pictures/logo.png";
import classes from "./Logo.module.css";

const Logo = () => (
  <NavLink exact to="/">
    <img src={logo} alt="page-logo" className={classes.logo} />
  </NavLink>
);

export default Logo;
