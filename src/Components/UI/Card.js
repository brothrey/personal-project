import { Fragment, useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Fragment>
      <div className={classes.accordion}>
        <div className={classes["accordion-item"]}>
          <div
            className={classes["accordion-title"]}
            onClick={() => setIsActive(!isActive)}
          >
            <div>{props.title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
        </div>
        {isActive && (
          <div className={classes["accordion-content"]}>{props.children}</div>
        )}
      </div>
    </Fragment>
  );
};

export default Card;
