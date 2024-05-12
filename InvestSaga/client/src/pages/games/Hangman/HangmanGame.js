import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/auth';
import axios from 'axios'; 
import Layout from '../../../components/Layout/Layout';
import hangman0 from '../../../images/hangman-0.svg';
import hangman1 from '../../../images/hangman-1.svg';
import hangman2 from '../../../images/hangman-2.svg';
import hangman3 from '../../../images/hangman-3.svg';
import hangman4 from '../../../images/hangman-4.svg';
import hangman5 from '../../../images/hangman-5.svg';
import hangman6 from '../../../images/hangman-6.svg';
import './Hangmanstyle.css';

const wordList = [
  { word: "savings", hint: "This is money you set aside for future use." },
  { word: "portfolio", hint: "This shows the overall value of all your investments." },
  // Add more words and hints as needed
];

const HangmanGame = () => {
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [chances, setChances] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const [auth, setAuth] = useAuth();

  useEffect(() => {
    startNewGame();
    setGameOver(false);
    setScore(0);
  }, []);

  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex];
    setWord(selectedWord.word.toLowerCase());
    setHint(selectedWord.hint);
    setGuesses([]);
    setChances(6);
    setGameOver(false);
  };

  const handleGuess = (letter) => {
    if (!word.includes(letter)) {
      setChances(chances - 1);
    }
    setGuesses([...guesses, letter]);
  };

  useEffect(() => {
    if (chances === 0) {
      setGameOver(true);
    }
    if (getWordDisplay() === word) {
      setScore(100);
      setGameOver(true);
      updateScore();
    }
  }, [chances, word]);

  const getWordDisplay = () => {
    return word
      .split('')
      .map(letter => (guesses.includes(letter) ? letter : '_'))
      .join(' ');
  };

  const hangmanImages = {
    6: hangman0,
    5: hangman1,
    4: hangman2,
    3: hangman3,
    2: hangman4,
    1: hangman5,
    0: hangman6,
  };

  const updateScore = async () => {
    try {
      const response = await axios.put("http://localhost:3005/api/v1/game/update-hangman-score", {
        userId: auth.user._id,
        hangmanScore: score // Assuming the score increments by 10 for each correct guess
      });
      
      
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  return (
    <Layout>
      <div className="hang">
        <div className="HangmanGame">
          <h1>Hangman Game</h1>
          <p>Hint: {hint}</p>
          <img src={hangmanImages[chances]} alt="Hangman" className="left"/>
          <div className="Word-display" id="right">{getWordDisplay()}</div>
          <p>Incorrect Guesses: {6 - chances}/6</p>
          {gameOver && (
            <div>
              <p>{getWordDisplay() === word ? 'You win!' : 'You lose!'} Score:{score}</p>
              <button className="new-game" onClick={startNewGame}>New Game</button>
            </div>
          )}
          <div className="Keyboard">
            {Array.from(Array(26)).map((_, index) => {
              const letter = String.fromCharCode(97 + index);
              return (
                <button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={guesses.includes(letter) || gameOver}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HangmanGame;
