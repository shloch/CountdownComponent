import React, { useState, useEffect } from 'react'
import "./App.css"
import CountdownComponent from './components/CountdownComponent'



function App(props) {
  const [isTrue, setTrue] = useState(false)
  const [isFalse, setFalse] = useState(false)
  const [nb, setNb] = useState(0)

  useEffect(() => {
    setTrue(prev => true)
    setFalse(prev => true)
  }, [isTrue, isFalse])


  function onDone() {
    setNb(prev => nb + 1)
  }

  return (
    <div className="myStyles">
      <CountdownComponent nb={nb} onDone={onDone} />
    </div>

  );
}

export default App;
