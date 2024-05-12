// levels.js

import React from 'react';
import './level.css'; // Import the CSS file for styling
import Layout from '../../components/Layout/Layout';
import hangman from '../../images/hangman.jpeg'
import scrambled from '../../images/scrambled.jpeg';
import trivia from '../../images/trivia.jpeg';
import lesson from '../../images/lessons.jpg';
import { Link } from 'react-router-dom';
import backgroundImg from '../../images/background.jpeg';
const Levels = () => {
  return (
    <Layout>
      
      <div className="levels-containers" style={{backgroundImage: `url(${backgroundImg})`,backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',}}>
            
        <div className="levels">
          
          <img src={lesson} alt="Level 1" />
          <Link to="/lesson" >
               <h3>Lessons</h3>
            </Link>
          
        </div>
        <div className="levels">
          <img src={scrambled} alt="Level 2" />
          <Link to="/wordsearch" >
                <h3>Word Search</h3>
            </Link>
        </div>
        <div className="levels">
          <img src={hangman} alt="Level 3" />
          <Link to="/hangman" >
                <h3>HangMan</h3>
            </Link>
        </div>
        <div className="levels">
          <img src={trivia} alt="Level 4" />
          <Link to="/trivia" >
                <h3>Trivia</h3>
            </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Levels;
