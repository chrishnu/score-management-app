import React, { useState } from 'react';

function Prediction() {
  const [prediction, setPrediction] = useState('');
  
  const handlePredictionChange = (event) => {
    setPrediction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Match Prediction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Prediction:
          <input type="text" value={prediction} onChange={handlePredictionChange} />
        </label>
        <button type="submit">Submit Prediction</button>
      </form>
    </div>
  );
}

export default Prediction;
