import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/home";
import About from "./components/about";
import Apartment from "./components/apartments/apartment";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/apartment">
        <Apartment />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
