import Header from "./Header";
import Navigation from "./Navigation";
import classes from "./Top.module.css";

const Top = () => {
  return (
    <div className={classes.top}>
      <Header />
      <Navigation />
    </div>
  );
};

export default Top;
