import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Apartment from "./components/apartments/apartment";
import Error from "./components/Error/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/apartment">
          <Apartment />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
