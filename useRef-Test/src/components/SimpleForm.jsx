import { useState } from 'react';
import usePreviousValue from '../hooks/usePreviosValue';
import './SimpleForm.css'; 

const SimpleForm = () => {
  const [name, setName] = useState('');
  const previousName = usePreviousValue(name);

  return (
    <div className="form-container">
      <h2>Comparar Valores Anteriores y Actuales</h2>
      
      <div className="input-group">
        <label>Valor:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="value-display">
        <p>Valor actual: <strong>{name || '(vacío)'}</strong></p>
        <p>Valor anterior: <strong>{previousName || '(vacío)'}</strong></p>
      </div>
    </div>
  );
};

export default SimpleForm;