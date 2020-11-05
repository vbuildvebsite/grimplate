import React from "react";
import LoginPage from "./components/Login/login.component.jsx";
import RegisterPage from "./components/Register/register.component.jsx";
import NavBar from "./components/Navbar/navbar.component.jsx";
import Landing from "./components/Landing/landing.component.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container-main">
          <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </section>
      </Router>
    </>
  );
};

export default App;
