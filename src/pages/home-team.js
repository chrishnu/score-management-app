import React, { useState, useEffect } from 'react';
import Scoreboard from '../components/dashboard-score';
import axios from 'axios'; 

function Home() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get('https://score-manage.typicode.com/post')
      .then(response => {
        setScores(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des scores :', error);
      });
  }, []);

  return (
    <div>
      <h1>Tournament Score Management</h1>
      <Scoreboard scores={scores} />
    </div>
  );
}

export default Home;
