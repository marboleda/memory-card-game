import React, { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid'

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [clicked, setClicked] = useState(Array(12).fill(false));

  return (
    <div className="App">
      <header>
        <h1>Tekken Character Memory Game</h1>
        <p>Get points by clicking on an image, but don't click on any more than once!</p>
        <span>Score: {score}</span>
        <span>Top Score: {topScore}</span>
      </header>

      <GameGrid
        order={order}
         />

    </div>
  );
}

export default App;
