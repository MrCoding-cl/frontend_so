import React,{useContext} from "react";
import SettingsContext from "../context/Settings/SettingsContext";

function TimeSelector(props) {
  const {time,selectedTime} = useContext(SettingsContext);
  return (
    <div className="columns">
      <div className="column">
        <h2 className="subtitle is-6">Time</h2>
        <div className="buttons">
          <button className={`button ${(time.morning===true?"is-info is-selected":"")}`} onClick={ ()=>selectedTime(1)}>morning</button>
          <button className={`button ${(time.afternoon===true?"is-info is-selected":"")}`} onClick={ ()=>selectedTime(2)}>afternoon</button>
          <button className={`button ${(time.night===true?"is-info is-selected":"")}`} onClick={ ()=>selectedTime(3)}>night</button>
        </div>
      </div>
    </div>
  );
}

export default TimeSelector;
