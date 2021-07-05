import React, {useContext,useEffect} from "react";
import "./../styles/global.scss";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import UberPage from "./uber";
import { Switch, Route, Router} from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import "./../util/analytics.js";
import {Redirect} from "react-router-dom";

//Context

import SettingsState from "../context/Settings/SettingsState";

function App(props) {




  return (
    <SettingsState>
      <Router>
        <>
          <Navbar
              color="white"
              spaced={true}
              logo="https://uft.cl/images/la_universidad/imagen-corporativa/Institucional/Logo_FINIS_institucional.png"
          />
          <Switch>
            <Route
                exact
                path="/"
                render={() => {
                  return (
                      <Redirect to="/frontend_so" />

                  )
                }}
            />
            <Route exact path="/frontend_so" component={IndexPage} />

            <Route exact path="/frontend_so/uber" component={UberPage} />

            <Route component={NotFoundPage} />
          </Switch>
        </>
      </Router>
    </SettingsState>
  );
}

export default App;
