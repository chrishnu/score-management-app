import React from 'react';

function Match({ match }) {
  return (
    <div>
      <h2>Match Details</h2>
      <p>Match ID: {match.id}</p>
      <p>Team Alpha Score: {match.alphaScore}</p>
      <p>Team Beta Score: {match.betaScore}</p>
      <p>Team Gamma Score: {match.gammaScore}</p>
      <p>Team Omega Score: {match.omegaScore}</p>
      
    </div>
  );
}

export default Match;
