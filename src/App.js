import React, {  } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://enterpay.abogadosloscabos.com/">
        Enterplay Solutions
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
