import './App.css';
import React, {useState} from 'react';




function App() {
  const [input, setInput] = useState('')

  const calculateResult = (input) => {
    let result;

  }

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0')
    } else if (value === '<') {
      setInput(input.slice(0,-1))
    } else if (value === '=') {
      // eslint-disable-next-line no-eval -- Harmful
      // try {
      //   setInput(eval(input).toString())
      // } catch (error) {
      //   setInput('Error: ' + error.message)
      // }
      calculateResult(input)
    }
    else {
      setInput((preValue) => preValue + value)
    }
  }




  return (
    <div className='mainContainer'>
      <div className='inputContainer'>
        <div className='output'>
          <div className='previous-operand'></div>
          <div className='current-operand'></div>
        </div>
      </div>
      <div className='buttonContainer'>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('<')}>&lt;</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className='buttonContainer'>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('X')}>X</button>
      </div>
      <div className='buttonContainer'>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className='buttonContainer'>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className='buttonContainer'>
        <button onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

export default App;
