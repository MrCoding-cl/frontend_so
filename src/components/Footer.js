import React from "react";
import Section from "./Section";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <a href="https://mrcoding.dev">
            <img src={props.logo} alt="Logo" />
          </a>
        </div>
        <div className="copyright">{props.copyright}</div>
      </div>
    </Section>
  );
}

export default Footer;
