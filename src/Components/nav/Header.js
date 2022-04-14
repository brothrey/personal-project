import classes from "./Header.module.css";
import { Fragment } from "react";
import Logo from "../logo/Logo";
import Contact from "../contact/Contact";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Contact />
      </header>
    </Fragment>
  );
};

export default Header;
