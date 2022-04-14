import { Fragment } from "react";
import classes from "./Contact.module.css";

const ModalWrapper = (props) => {
  return (
    <Fragment>
      <div className={classes.dropdown}>
        <div className={classes["dropdown-content"]}>
          <ul>
            Email:
            <ul>
              <b>adrian.surdu@gmail.com</b>
            </ul>
          </ul>
          <ul>
            Phone:
            <ul>
              <b>0758 832 577</b>
            </ul>
          </ul>
          <ul>
            Email:
            <ul>
              <b>adrian.surdu@gmail.com</b>
            </ul>
          </ul>
        </div>
      </div>
      <div className={classes.backdrop} onClick={props.onClick}></div>
    </Fragment>
  );
};

export default ModalWrapper;
