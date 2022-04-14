import { useState } from "react";
import classes from "./Contact.module.css";
import ModalWrapper from "./ModalWrapper";

const Contact = () => {
  const [isShown, setIsShown] = useState(false);
  const showDetails = () => {
    setIsShown(true);
  };

  const hideDetails = () => {
    setIsShown(false);
  };
  return (
    <div className={classes.dropdown}>
      <button onClick={showDetails} className={classes.dropbtn}>
        Contact
      </button>
      {isShown && <ModalWrapper onClick={hideDetails}></ModalWrapper>}
    </div>
  );
};

export default Contact;
