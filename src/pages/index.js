import React from "react";
import StartSection from "./../components/StartSection";
import InfoSection from "./../components/InfoSection";


function IndexPage(props) {
    // eslint-disable-next-line no-undef

  return (
    <>
      <StartSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Uber Simulator"
        subtitle="Simulator Ubers that travel the minimum total distance, considering the distances of the routes they have to travel.."
        buttonText="Start"
        buttonColor="primary"
        buttonInverted={false}
        buttonPath="/frontend_so/uber"
      />
      <InfoSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--3rFO85cD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/bkv3xbjb74epempcjone.gif"
      />
    </>
  );
}

export default IndexPage;
