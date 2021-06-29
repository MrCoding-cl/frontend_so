import React,{useState,useContext} from "react";
import TimeSelector from "./TimeSelector";
import SettingsContext from "../context/Settings/SettingsContext";

function Settings(props) {

    const {pram,selectedPram} = useContext(SettingsContext);

  return (
    <div className="column is-one-third">
      <p className="card-header-title">Settings</p>
      <TimeSelector />
      <div className="columns">
        <div className="column">
          <h2 className="subtitle is-6">Pram or not pram</h2>
          <div className="buttons has-addons">
            <button className={`button ${(pram.pram===true?"is-info is-selected":"")}`} onClick={ ()=>selectedPram(1)}>pram</button>
            <button className={`button ${(pram.pram===false?"is-info is-selected":"")}`} onClick={ ()=>selectedPram(2)}>no pram</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
