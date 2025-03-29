import { useState } from 'react';
const CounterButtons = ({ dispatch }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleSetValue = () => {
      const num = parseInt(inputValue);
      if (!isNaN(num)) {
        dispatch({ type: 'SET_VALUE', payload: num });
        setInputValue('');
      }
    };
  
    return (
      <div className="button-group">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        
        <div className="input-group">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Set value"
          />
          <button onClick={handleSetValue}>Set</button>
        </div>
      </div>
    );
  };
  
  export default CounterButtons;