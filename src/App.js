import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [clicked, setClicked] = useState(Array(12).fill(false));

  return (
    <div className="App">
    </div>
  );
}

export default App;
