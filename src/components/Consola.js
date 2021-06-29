import React from 'react';
import Terminal from 'react-console-emulator'


const commands = {
  echo: {
    description: 'AYUWOKI.',
    usage: '',
    fn: function () {
      return `${Array.from("AAAA").join(' ')}`
    }
  }
}




const Consola = () => {
  const config={
    globalStyles: {
      maxHeight: '300px'
    },
    delay: {
      description: 'Delays return of value by 1000 ms.',
      fn: () => {
        return new Promise(resolve => {
          setTimeout(() => resolve('Finished!'), 1000)
        })
      }
    }
  }


  return (
      <>
        <Terminal
            style={config.globalStyles}
            commands={commands}
            debounce={250}
            promptLabelStyle={{ color: '#FFFFFF' }}
            welcomeMessage={[""]}
            promptLabel={'profeMHB@finis:~$'}
            inputTextStyle={{ color: 'white' }}
            //disabled={true}

        />
      </>
  )

}

export default Consola;