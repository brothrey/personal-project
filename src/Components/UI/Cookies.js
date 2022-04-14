import classes from "./Cookies.module.css";

const Cookies = (props) => {
  return (
    <div className={classes.cookies}>
      <p>
        <b>This website uses cookies</b> <br></br> We use cookies to personalise
        content and ads, to provide social media features and to analyse our
        traffic. We also share information about your use of our site with our
        social media, advertising and analytics partners who may combine it with
        other information that you’ve provided to them or that they’ve collected
        from your use of their services.
      </p>
      <button onClick={props.onClick} className={classes.button}>
        Deny
      </button>
      <button onClick={props.onClick} className={classes.button}>
        Accept
      </button>
    </div>
  );
};

export default Cookies;
