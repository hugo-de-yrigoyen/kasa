import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/Home";
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
