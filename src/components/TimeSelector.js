import React from "react";

function TimeSelector(props) {
  return (
    <div className="columns">
      <div className="column">
        <h2 className="subtitle is-6">Time</h2>
        <div className="buttons">
          <button className="button">morning</button>
          <button className="button">afternoon</button>
          <button className="button">night</button>
        </div>
      </div>
    </div>
  );
}

export default TimeSelector;
