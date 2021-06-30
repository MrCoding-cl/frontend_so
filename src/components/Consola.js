import React, {useContext, useEffect} from 'react';
import Terminal from 'terminal-in-react';


const Consola = () => {
  return (
      <>
        <Terminal watchConsoleLogging color={"green"} backgroundColor={'while'}  hideTopBar={true}/>
      </>
  )

}

export default Consola;