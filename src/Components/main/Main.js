import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Education from "../pages/Education";
import Hobbies from "../pages/Hobbies";
import Home from "../pages/Home";
import Work from "../pages/Work";
import classes from "./Main.module.css";
const Main = () => {
  return (
    <div className={classes.main}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/hobbies" component={Hobbies}></Route>
        <Route exact path="/work" component={Work}></Route>
        <Route exact path="/education" component={Education}></Route>
      </Switch>
    </div>
  );
};

export default Main;
