import React, {useState, useEffect} from 'react';
import './styles.css';
import ShowTurns from './components/ShowTurns';
import ShowTime from './components/ShowTime';
import Button from './components/Button';


function App() {
  const [numVoltas, setnumVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;
    if(running) {
      timer = setInterval(() => {
        setTempo(old => old +1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [running]);
  
  const toggleRunning = () => {
    setRunning(!running);
  }

  const increment = () =>{
    setnumVoltas(numVoltas+1);
  }
  const decrement = () =>{
    if(numVoltas>0){
      setnumVoltas(numVoltas-1);
    }
  }

  const reset = () => {
    setnumVoltas(0);
    setTempo(0);
  }
  return (
    <div className="App">
      <ShowTurns turns={numVoltas}></ShowTurns>
      <Button text='+' className='bigger' onClick={increment}></Button>
      <Button text='-' className='bigger' onClick={decrement}></Button>
      { 
        numVoltas > 0 &&
        <ShowTime tempo={Math.round(tempo/numVoltas)}></ShowTime>
      }
      
      <Button onClick={toggleRunning} text={running ? 'Pausar' : 'Iniciar'}></Button>
      <Button onClick={reset} text='Reiniciar'></Button>
    </div>
  );
}

export default App;
