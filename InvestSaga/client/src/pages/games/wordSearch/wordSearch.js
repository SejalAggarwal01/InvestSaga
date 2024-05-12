import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../context/auth';
import './wordSearch.css'
import axios from 'axios'; 
import Layout from '../../../components/Layout/Layout';


const WordSearch = () => {
  // State variables
  const [selectedWords, setSelectedWords] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 3 minutes
  const [gameOver, setGameOver] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);

  const [auth,setAuth]=useAuth();
  
  // Puzzle data
  const puzzle = [
    ['S', 'E', 'L', 'L', 'O', 'F', 'F', 'S', 'S', 'E', 'T'],
    ['T', 'R', 'A', 'D', 'E', 'H', 'F', 'P', 'O', 'R', 'T'],
    ['O', 'P', 'P', 'O', 'R', 'T', 'U', 'N', 'I', 'T', 'Y'],
    ['C', 'K', 'S', 'T', 'O', 'C', 'K', 'S', 'L', 'I', 'R'],
    ['K', 'E', 'Y', 'W', 'O', 'R', 'D', 'S', 'T', 'N', 'E'],
    ['S', 'A', 'V', 'I', 'N', 'G', 'S', 'E', 'M', 'A', 'R'],
    ['E', 'A', 'R', 'N', 'I', 'N', 'G', 'S', 'T', 'O', 'L'],
    ['T', 'R', 'A', 'N', 'S', 'A', 'C', 'T', 'I', 'O', 'N'],
    ['I', 'N', 'V', 'E', 'S', 'T', 'M', 'E', 'N', 'T', 'D'],
    ['N', 'G', 'A', 'I', 'N', 'S', 'V', 'I', 'Y', 'U', 'F']
  ];

  // Hidden words and hints
  const hiddenWordsWithHints = [
    { word: 'SELLOFF', hint: 'Liquidation of assets' },
    { word: 'TRADE', hint: 'Exchange of goods or services' },
    { word: 'OPPORTUNITY', hint: 'Favorable chance' },
    { word: 'STOCKS', hint: 'Shares in a company' },
    { word: 'KEYWORDS', hint: 'Significant words' },
    { word: 'SAVINGS', hint: 'Money saved' },
    { word: 'EARNINGS', hint: 'Income or profit' },
    { word: 'TRANSACTION', hint: 'Exchange or interaction' },
    { word: 'INVESTMENT', hint: 'Allocation of funds' },
    { word: 'GAINS', hint: 'Profit or advantage' }
  ];

    // UseEffect hook for handling timer and updating score
  useEffect(() => {
    const updateScore = async () => {
      try {
        await axios.put("http://localhost:3005/api/v1/game/update-score", {
          userId: auth.user._id,
          wordsearchScore: score
        });
      } catch (error) {
        console.error('Error updating score:', error);
      }
    };

    if (!gameOver && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
      if (score === 100) {
        setTimeLeft(0);
        toast.success('Congratulations! You completed the game!');
      } else if (timeLeft <= 0) {
        toast.error('Time\'s up! Try again!');
      }
      updateScore(); // Call updateScore when the game is over or time is up
    }
  }, [timeLeft, gameOver, score]);

  /*
   // UseEffect hook for handling timer
   useEffect(() => {
    if (!gameOver && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
     
      if (score === 100) {
        setTimeLeft(0);
        toast.success('Congratulations! You completed the game!');
      } else if (timeLeft <= 0) {
        toast.error('Time\'s up! Try again!');
      }

      // Update wordsearchScore in the backend
      updateScore('wordsearchScore', score);
    }
  }, [timeLeft, gameOver, score]);
  
*/



  
  // Function to update the score in the backend
  const updateScore = async (scoreType, newScore) => {
    try {
      await axios.put("http://localhost:3005/api/v1/game/update-score", {
        userId: auth.user._id,
        wordsearchScore: newScore
      });
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };
  
  // Event handler for mouse down on a cell
  const handleMouseDown = (rowIndex, colIndex) => {
    setMouseDown(true);
    setSelectedCells([{ row: rowIndex, col: colIndex }]);
  };

  // Event handler for mouse enter on a cell
  const handleMouseEnter = (rowIndex, colIndex) => {
    if (mouseDown) {
      setSelectedCells([...selectedCells, { row: rowIndex, col: colIndex }]);
    }
  };

  // Event handler for mouse up on a cell
  const handleMouseUp = () => {
    setMouseDown(false);
    const word = getSelectedWord();
    if (word && !selectedWords.includes(word) && !gameOver) {
      setSelectedWords([...selectedWords, word]);
      if (hiddenWordsWithHints.some(item => item.word === word)) {
        setFoundWords([...foundWords, word]);
        setScore(score + 10);
      }
    }
    setSelectedCells([]);
  };

  // Function to get the word formed by selected cells
  const getSelectedWord = () => {
    const word = selectedCells.map(cell => puzzle[cell.row][cell.col]).join('');
    return hiddenWordsWithHints.find(item => item.word === word)?.word;
  };



  //-------------------------------------------------
  /*
  
  // Function to update the score when the game is completed
  const updateScore = async () => {
    try {
      // Make an API call to update the word search module score
      await axios.put('/api/v1/game/wordsearch/score', { userId: auth.user._id, score });

      // Fetch the global score from the backend
      const response = await axios.put(`/api/v1/game/global/score/${auth.user._id}`);
      const { globalScore } = response.data;

      // Update the global score in the component state
      setScore(globalScore);
    } catch (error) {
      console.error('Error updating score:', error);
      toast.error('Error updating score. Please try again.');
    }
  };

  // UseEffect hook to update the score when the game is over
  useEffect(() => {
    if (gameOver) {
      updateScore();
    }
  }, [gameOver]);*/


  return (
    <Layout>
      <div className="word-search">
      <div className="puzzle">
        {puzzle.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${
                  selectedCells.find(cell => cell.row === rowIndex && cell.col === colIndex)
                    ? 'selected'
                    : ''
                } ${foundWords.includes(letter) ? 'found' : ''}`}
                onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                onMouseUp={handleMouseUp}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="sidebar">
        <div className="score">Score: {score}</div>
        <div className="timer">Time Left: {timeLeft} seconds</div>
        <div className="hints">
          <h2>Hints</h2>
          <ul>
            {hiddenWordsWithHints.map((item, index) => (
              <li key={index} className={selectedWords.includes(item.word) ? 'found' : ''}>
                {selectedWords.includes(item.word) ? <>&#10004; </> : null}
                {selectedWords.includes(item.word) ? <span className="found-word">{item.hint} ( {item.word})</span> : item.hint}
              </li>
            ))}
          </ul>
        </div>
        {gameOver && <div className="game-over">Game Over!</div>}
      </div>
    </div>

    </Layout>
    
  );
};

export default WordSearch;
