import React,{useState} from "react";
import TimeSelector from "./TimeSelector";

function Settings(props) {
    const [selected, setSelected] = useState({
        boton1:"",
        boton2:"",
    });

    function validar(valor) {
        if (valor===1){
            setSelected({...selected,boton1:"is-info is-selected",boton2:""})
        }else{
            setSelected({...selected,boton1:"",boton2:"is-info is-selected"})
        }
    }

  return (
    <div className="column is-one-third">
      <p className="card-header-title">Settings</p>
      <TimeSelector />
      <div className="columns">
        <div className="column">
          <h2 className="subtitle is-6">Pram or not pram</h2>
          <div className="buttons has-addons">
            <button className={`button ${selected.boton1}`} onClick={ ()=>validar(1)}>pram</button>
            <button className={`button ${selected.boton2}`} onClick={ ()=>validar(2)}>no pram</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
