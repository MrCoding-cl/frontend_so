import React from "react";
import CustomCoordinates from "./CustomCoordinates";
import Settings from "./Settings";

function MediumSection(props) {
  return (
    <div className="container">
      <div className="columns">
        <CustomCoordinates />
        <Settings />
      </div>
    </div>
  );
}

export default MediumSection;
