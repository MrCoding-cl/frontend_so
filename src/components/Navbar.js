import React, { useState } from "react";
import { Link } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={
        "navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <a className="navbar-item" href="http://mrcoding.me/informe_so/">
              Documentation
            </a>
            <Link className="navbar-item" to="/faq" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
