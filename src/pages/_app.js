import React from "react";
import "./../styles/global.scss";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import UberPage from "./uber";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import "./../util/analytics.js";

function App(props) {
  return (
    <Router>
      <>
        <Navbar
          color="white"
          spaced={true}
          logo="https://uft.cl/images/la_universidad/imagen-corporativa/Institucional/Logo_FINIS_institucional.png"
        />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/uber" component={UberPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;