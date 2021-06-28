import React, {useState} from "react";

function CustomCoordinates(props) {
    const [selected, setSelected] = useState({
        boton1:"",
        boton2:"",
    });

    function Validar(valor){
        if (valor===1){
            setSelected({...selected,boton1:"is-info is-selected",boton2:""})
        }else{
            setSelected({...selected,boton1:"",boton2:"is-info is-selected"})
        }
    }

  return (
    <div className="column">
      <p className="card-header-title">Custom coordinates</p>
      <div className="buttons has-addons">
        <button className={`button ${selected.boton1}`} onClick={ ()=>Validar(1)}>Request</button>
        <button className={`button ${selected.boton2}`} onClick={ ()=>Validar(2)}>Ubers</button>
      </div>
      <textarea className="textarea" placeholder="{x:1,y:2}" />
      <div className="container has-text-centered">
        {/*<button className="button is-primary">Send</button>*/}
      </div>
    </div>
  );
}

export default CustomCoordinates;
