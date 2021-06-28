import React from "react";

function CustomCoordinates(props) {
  return (
    <div className="column">
      <p className="card-header-title">Custom coordinates</p>
      <div className="buttons has-addons">
        <button className="button">Request</button>
        <button className="button">Ubers</button>
      </div>
      <textarea className="textarea" placeholder="{x:1,y:2}" />
      <div className="container has-text-centered">
        {/*<button className="button is-primary">Send</button>*/}
      </div>
    </div>
  );
}

export default CustomCoordinates;
