import { Fragment, useState } from "react";
import classes from "./Contact.module.css";

const ModalWrapper = (props) => {
  const [newTab, setNewTab] = useState();

  const [isShown, setIsShown] = useState(false);
  const toggleDetails = () => {
    setIsShown(!isShown);
  };

  return (
    <Fragment>
      <div className={classes.dropdown}>
        <div className={classes["dropdown-content"]}>
          <ul>
            <a href={"mailto:" + props.data.email}>{props.data.email}</a>
            <img src={props.data.emailicon} alt={props.data.emailalt}></img>
          </ul>
          <ul>
            <a href={"tel:" + props.data.phone}>{props.data.phone}</a>
            <img src={props.data.phoneicon} alt={props.data.phonealt}></img>
          </ul>
          <ul>
            <div onClick={toggleDetails}>LinkedIn</div>
            <img
              src={props.data.linkedinlogo}
              alt={props.data.linkedinalt}
            ></img>
          </ul>
          {isShown && (
            <div className={classes.details}>
              <a href={props.data.linkedin} target="_blank" rel="noreferrer">
                New tab
              </a>
              <a href={props.data.linkedin}>Redirect</a>
            </div>
          )}
        </div>
      </div>
      <div className={classes.backdrop} onClick={props.onClick}></div>
    </Fragment>
  );
};

export default ModalWrapper;
