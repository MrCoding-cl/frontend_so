import React from "react";
import TimeSelector from "./TimeSelector";

function Settings(props) {
  return (
    <div className="column is-one-third">
      <p className="card-header-title">Settings</p>
      <TimeSelector />
      <div className="columns">
        <div className="column">
          <h2 className="subtitle is-6">Pram or not pram</h2>
          <div className="buttons has-addons">
            <button className="button">pram</button>
            <button className="button">no pram</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
