import React from 'react';

function team({ team }) {
  return (
    <div>
      <h2>Team information</h2>
      <p>Team Name: {team.name}</p>
      <p>Team Captain: {team.captain}</p>
    </div>
  );
}

export default team;
