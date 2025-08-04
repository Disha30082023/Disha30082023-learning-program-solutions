import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleINRtoEuro = () => {
    const euroValue = parseFloat(rupees) / 90; 
    setEuro(euroValue.toFixed(2));
  };

  const handleEuroToINR = () => {
    const rupeeValue = parseFloat(euro) * 90;
    setRupees(rupeeValue.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>

      <label>Indian Rupees:</label>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        style={{ marginLeft: '8px' }}
      />
      <button onClick={handleINRtoEuro} style={{ marginLeft: '10px' }}>Convert to Euro</button>

      <br /><br />

      <label>Euro:</label>
      <input
        type="number"
        value={euro}
        onChange={(e) => setEuro(e.target.value)}
        style={{ marginLeft: '77px' }}
      />
      <button onClick={handleEuroToINR} style={{ marginLeft: '10px' }}>Convert to INR</button>
    </div>
  );
};

export default CurrencyConvertor;