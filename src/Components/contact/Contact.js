import { useState } from "react";
import classes from "./Contact.module.css";
import ModalWrapper from "./ModalWrapper";

const Contact = (props) => {
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
      {isShown && (
        <ModalWrapper onClick={hideDetails} data={props.data}></ModalWrapper>
      )}
    </div>
  );
};

export default Contact;
