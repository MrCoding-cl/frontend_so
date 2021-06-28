import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router.js";

function StartSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="has-text-centered"
        />
        <div className="buttons is-centered">
          <Link
            className={
              "button is-medium" +
              (props.buttonColor ? ` is-${props.buttonColor}` : "") +
              (props.buttonInverted ? " is-inverted" : "")
            }
            to={props.buttonPath}
          >
            {props.buttonText}
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default StartSection;
