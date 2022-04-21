import classes from "./Header.module.css";
import { Fragment } from "react";
import Logo from "../logo/Logo";
import Contact from "../contact/Contact";
import emailicon from "../../Pictures/email.png";
import phoneicon from "../../Pictures/phone.png";
import linkedinlogo from "../../Pictures/linkedin.png";

const DUMMY_VALUES = {
  email: "adrian.surdu@gmail.com",
  emailicon: emailicon,
  emailalt: "Email icon",
  phone: "0758 832 577",
  phoneicon: phoneicon,
  phonealt: "Phonecall Icon",
  linkedin: "https://www.linkedin.com/in/adrian-surdu-04172190/",
  linkedinlogo: linkedinlogo,
  linkedinalt: "LinkedIn logo",
};
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Contact data={DUMMY_VALUES} />
      </header>
    </Fragment>
  );
};

export default Header;
