// FinanceGamePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import './financeground.css';

const FinanceGamePage = () => {
  // You can dynamically generate levels here
  const levels = [
    { id: 1, name: 'Level 1' },
    { id: 2, name: 'Level 2' },
    { id: 3, name: 'Level 3' },
    { id: 4, name: 'Level 4' },
    { id: 5, name: 'Level 5' },
    // Add more levels as needed
  ];

  return (
    <Layout>
    <div className="finance-game-page">
      <h1>Finance Game</h1>
      <div className="score-button">
        <h4>Score</h4>
      </div>
      <div className="level-container">
        {levels.map(level => (
          <Link key={level.id} to="/level" className="level">
            <div className="level-thumbnail">
              <span>{level.name}</span>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
    </Layout>
  );
};

export default FinanceGamePage;
