import React, {useState, useContext, useEffect} from "react";
import SettingsContext from "../context/Settings/SettingsContext";

function CustomCoordinates(props) {

    const {coordinates,selectedCoordinates,uberData,requestData,handleUberdata,handleRequestData} = useContext(SettingsContext);
    const [username, setUsername] = useState('');
    // console.log(username)
    return (
    <div className="column">
      <p className="card-header-title">Custom coordinates</p>
      <div className="buttons has-addons">
        <button className={`button ${(coordinates.request===true?"is-info is-selected":"")}`} onClick={()=>selectedCoordinates(1)} >Request</button>
        <button className={`button ${(coordinates.uber===true?"is-info is-selected":"")}`} onClick={()=>selectedCoordinates(2)} >Ubers</button>
      </div>
        <>
            {(coordinates.request===true?<textarea className="textarea" placeholder={`119 459
142 680
933 468
737 567`} value={uberData} onChange={event=>handleUberdata(event.target.value)}/>:coordinates.uber===true?<textarea className="textarea" placeholder={`492 720 - 521 353 - 9
231 321 - 939 660 - 14
256 470 - 690 944 - 40
534 724 - 52 382 - 67`} value={requestData} onChange={event=>handleRequestData(event.target.value)}/>:<> </>)}
        </>
      <div className="container has-text-centered">
        {/*<button className="button is-primary">Send</button>*/}
      </div>
    </div>
  );
}

export default CustomCoordinates;
