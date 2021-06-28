import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import MediumSection from "./MediumSection";
import Consola from "./Consola";
import Footer from "./Footer";
import "./ChartSection.scss";
import Chartx from "./Chartx";

function ChartSection(props) {
  return (
    <>
      <Section
        color={props.color}
        size={props.size}
        backgroundImage={props.backgroundImage}
        backgroundImageOpacity={props.backgroundImageOpacity}
      >
        <div className="ChartSection__container container">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={3}
            spaced={true}
            className="has-text-centered"
          />
          <div className="box has-text-centered">

              <Chartx/>
          </div>
          <div className="container has-text-centered">
            <button className="button is-primary is-rounded">Start</button>
          </div>
          <MediumSection />
          <Consola />
        </div>
      </Section>
      <Footer
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2021 Mrcoding"
        logo="https://res.cloudinary.com/dimsv0hrt/image/upload/v1612244854/mrcoding/logo_kfr9x6.svg"
      />
    </>
  );
}

export default ChartSection;
