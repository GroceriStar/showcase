import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";


import { Router } from "./Router";
// import { BrowserRouter } from "react-router-dom";


import "./index.css";

ReactDOM.render(
    <Router />,
  document.getElementById("root")
);
registerServiceWorker();
