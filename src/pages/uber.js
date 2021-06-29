import React,{useContext,useEffect} from "react";
import ChartSection from "./../components/ChartSection";
import SettingsContext from "../context/Settings/SettingsContext";

function UberPage(props) {

  const {id,getId} = useContext(SettingsContext);
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    if(id===null){
      console.log(id)
      getId();
    }
  },[]);
  return (
    <ChartSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title="Panel"
      subtitle="Time and distance chart of the ubers"
      embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
    />
  );
}

export default UberPage;
