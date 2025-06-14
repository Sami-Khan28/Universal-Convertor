import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [conversionType, setConversionType] = useState('kgToLbs');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }

    let converted;
    switch (conversionType) {
      case 'kgToLbs':
        converted = (value * 2.20462).toFixed(2) + ' lbs';
        break;
      case 'lbsToKg':
        converted = (value / 2.20462).toFixed(2) + ' kg';
        break;
      case 'inchToCm':
        converted = (value * 2.54).toFixed(2) + ' cm';
        break;
      case 'cmToInch':
        converted = (value / 2.54).toFixed(2) + ' in';
        break;
      default:
        converted = '';
    }
    setResult(converted);
  };

  return (
    <div className="App">
      <div className="converter-box">
        <h2>🌐 Unit Converter</h2>
        <input
          type="text"
          placeholder="Enter value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="custom-select"
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
        >
          <option value="kgToLbs">Kilograms → Pounds</option>
          <option value="lbsToKg">Pounds → Kilograms</option>
          <option value="inchToCm">Inches → Centimeters</option>
          <option value="cmToInch">Centimeters → Inches</option>
        </select>
        <button className="btn" onClick={handleConvert}>Convert</button>
        {result && (
          <div className="result">
            <h3>✅ Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
