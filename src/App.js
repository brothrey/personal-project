import React, { useState } from "react";
import "./App.css";
import Bottom from "./Components/bottom/Bottom";
import Main from "./Components/main/Main";
import Top from "./Components/nav/Top";
import Cookies from "./Components/UI/Cookies";

const App = () => {
  const [isAccepted, setIsAccepted] = useState(
    JSON.parse(localStorage.getItem("is-accepted"))
  );

  const hideDetails = () => {
    localStorage.setItem("is-accepted", JSON.stringify(true));
    setIsAccepted(true);
  };

  return (
    <div className="app">
      <Top />
      <Main />
      {!isAccepted && <Cookies onClick={hideDetails} />}
      <Bottom />
    </div>
  );
};

export default App;
