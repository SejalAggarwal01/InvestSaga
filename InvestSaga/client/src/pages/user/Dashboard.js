import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import "./userDashBoard.css";

const Dashboard = () => {
  const [auth]=useAuth();

  const [scores, setScores] = useState({
    learningScore: 0,
    hangmanScore: 0,
    wordsearchScore: 0,
    triviaScore: 0,
    finalScore: 0
  });

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/v1/game/global-score/${auth.user._id}`);
        const { globalScore } = response.data;
        setScores(globalScore);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };
  
    if (auth && auth.user && auth.user._id) {
      fetchScores();
    }
  }, [auth]);

   // Function to calculate percentage
   const calculatePercentage = (score, maxScore) => {
    return Math.round((score / maxScore) * 100);
  };

  return (
    <Layout>
      <div className='container-fluid m-3 p-3'>
        <div className="row justify-content-center">
          <div className='col-md-8'>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Hey {auth.user.name}! Here's Your Progress</h2><br/>
                <div className="progress-scores">
                  
                  {/* Repeat similar structure for other scores */}
                    <div className="progress-score">
                      <h5>Hangman Score:</h5>
                      <div className="progress-circle">
                        <svg className="progress-circle-svg">
                          <circle className="progress-circle-background" cx="50%" cy="50%" r="40%" />
                          <circle
                            className="progress-circle-progress"
                            cx="50%"
                            cy="50%"
                            r="40%"
                            strokeDasharray={`${calculatePercentage(scores.hangmanScore, 100)}%, 100%`}
                          />
                        </svg>
                        <span className="progress-circle-label">{scores.hangmanScore}</span>
                      </div>
                    </div>

                    <div className="progress-score">
                      <h5>Word Search Score:</h5>
                      <div className="progress-circle">
                        <svg className="progress-circle-svg">
                          <circle className="progress-circle-background" cx="50%" cy="50%" r="40%" />
                          <circle
                            className="progress-circle-progress"
                            cx="50%"
                            cy="50%"
                            r="40%"
                            strokeDasharray={`${calculatePercentage(scores.wordsearchScore, 100)}%, 100%`}
                          />
                        </svg>
                        <span className="progress-circle-label">{scores.wordsearchScore}</span>
                      </div>
                    </div>

                    <div className="progress-score">
                      <h5>Trivia Score:</h5>
                      <div className="progress-circle">
                        <svg className="progress-circle-svg">
                          <circle className="progress-circle-background" cx="50%" cy="50%" r="40%" />
                          <circle
                            className="progress-circle-progress"
                            cx="50%"
                            cy="50%"
                            r="40%"
                            strokeDasharray={`${calculatePercentage(scores.triviaScore, 100)}%, 100%`}
                          />
                        </svg>
                        <span className="progress-circle-label">{scores.triviaScore}</span>
                      </div>
                    </div>


                </div>
                <hr />
                <div className="final-score">
                  <h4 className="text-center">Final Score:</h4>
                  <h2 className="text-center">{scores.finalScore}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;