import './App.css';
import Button from './components/Button.js';
import Panel from './components/Panel';
import BtnClear from './components/Button-Clear'
import ButtonOn from './components/ButtonOn';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('');
 
  const addInput = val => {
    setInput(input + val);
  };

  const valueInput = /\d+[\+\-\/\*]\d+/g;

  const result = () => {

    if(show === false){
      alert('Turn on the calculator');
    }
    else if(input !== '' && valueInput.test(input) && show === true){
      setInput(evaluate(input));
    }else {
      alert('Enter a calculation');
    }
  };


  const [show, setShow] = useState(false);
  console.log(show);
  
  return (
    <div className="App">
      <h1>My Calculator</h1>
      <div className='calculator-cotainer'>
        <Panel input={input} onOff={show} />
        <div className='colum'>
          <ButtonOn managerClic={() => {setInput(''); setShow(true);}}>On</ButtonOn>
          <Button managerClic={() => {setInput(''); setShow(false);}}>Off</Button>
          <BtnClear managerClear={() => setInput('')}>C</BtnClear>
          <Button managerClic={addInput}>*</Button>
          </div>
        <div className='colum'>
          <Button managerClic={addInput}>7</Button>
          <Button managerClic={addInput}>8</Button>
          <Button managerClic={addInput}>9</Button>
          <Button managerClic={addInput}>/</Button>
        </div>
        <div className='colum'>
          <Button managerClic={addInput}>4</Button>
          <Button managerClic={addInput}>5</Button>
          <Button managerClic={addInput}>6</Button>
          <Button managerClic={addInput}>-</Button>
        </div>
        <div className='colum'>
          <Button managerClic={addInput}>1</Button>
          <Button managerClic={addInput}>2</Button>
          <Button managerClic={addInput}>3</Button>
          <Button managerClic={addInput}>+</Button>
        </div>
        <div className='colum'>
          <Button managerClic={addInput}>0</Button>
          <Button managerClic={addInput}>.</Button>
          <Button managerClic={result}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
