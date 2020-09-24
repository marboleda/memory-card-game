import React, { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid'

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [clicked, setClicked] = useState(Array(12).fill(false));

  const shuffleOrder = () => {
    //use Fisher-Yates algorithm
    const newOrder = [...order];
    let currentIndex = newOrder.length, tempValue, randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = newOrder[currentIndex];
      newOrder[currentIndex] = newOrder[randomIndex];
      newOrder[randomIndex] = tempValue;
    }

    setOrder(newOrder);
  }

  const handleCardClick = (cardNum) => {
    shuffleOrder()

    const newClickedArray = [...clicked];

    if (clicked[cardNum]) { //if card already clicked
      if (score > topScore) {
        setTopScore(score);
      }
      setScore(0);
      setClicked(Array(12).fill(false));
    }
    else { //if card not previously clicked
      if (score + 1 > topScore) {
        setTopScore(score + 1);
      }
      newClickedArray[cardNum] = true;
      setScore(score + 1);
      setClicked(newClickedArray);
    }

  }

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
        click={handleCardClick}
         />

    </div>
  );
}

export default App;
