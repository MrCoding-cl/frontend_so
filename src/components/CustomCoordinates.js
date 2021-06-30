import React, {useState, useContext, useEffect} from "react";
import SettingsContext from "../context/Settings/SettingsContext";

function CustomCoordinates(props) {

    const {coordinates,selectedCoordinates} = useContext(SettingsContext);
    const [username, setUsername] = useState('');
    console.log(username)
    return (
    <div className="column">
      <p className="card-header-title">Custom coordinates</p>
      <div className="buttons has-addons">
        <button className={`button ${(coordinates.request===true?"is-info is-selected":"")}`} onClick={()=>selectedCoordinates(1)} >Request</button>
        <button className={`button ${(coordinates.uber===true?"is-info is-selected":"")}`} onClick={()=>selectedCoordinates(2)} >Ubers</button>
      </div>
        <>
            {(coordinates.request===true?<textarea className="textarea" placeholder="{x:1,y:2}" value={username} onChange={event=>setUsername(event.target.value)}/>:coordinates.uber===true?<textarea className="textarea" placeholder="Requests" value={33} />:<> </>)}
        </>
      <div className="container has-text-centered">
        {/*<button className="button is-primary">Send</button>*/}
      </div>
    </div>
  );
}

export default CustomCoordinates;
