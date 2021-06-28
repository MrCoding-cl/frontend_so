import React from "react";
import Section from "./Section";
import "./InfoSection.scss";

function InfoSection(props) {
  const items = [
    {
      title: "React",
      description:
        "We use react in this university project for better performance.",
      iconClass: "fab fa-react",
      iconColor: "primary",
    },
    {
      title: "Uber",
      description:
        "We use the algorithm that simulates in uber given in the project.",
      iconClass: "fab fa-uber",
      iconColor: "primary",
    },
    {
      title: "Algorim",
      description:
        "We are using the Harmonic Random Walk and the PRAM version.",
      iconClass: "fas fa-random",
      iconColor: "primary",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column">
            <figure className="InfoSection__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          </div>
          <div className="column is-1" />
          <div className="column is-5-desktop">
            {items.map((item, index) => (
              <div
                className="InfoSection__feature columns is-vcentered is-variable is-4 is-mobile"
                key={index}
              >
                <div className="column is-narrow">
                  <div
                    className={`InfoSection__icon icon has-text-${item.iconColor}`}
                  >
                    <i className={`${item.iconClass}`} />
                  </div>
                </div>
                <div className="column">
                  <h3 className="InfoSection__title title has-text-weight-bold is-spaced is-5">
                    {item.title}
                  </h3>
                  <p className="subtitle is-6 has-text-grey">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default InfoSection;
