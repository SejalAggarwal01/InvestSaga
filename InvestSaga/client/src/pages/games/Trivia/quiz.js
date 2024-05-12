import React, { useState } from 'react'
import QuizResult from './quizResult';
import './quiz.css';
import Layout from '../../../components/Layout/Layout';
const quizArray = [
    {
        question: "Which of the following is NOT a type of investment?",
        options:["Stocks","Bonds","Savings","Real Estate"],
        answer: 3
    },
    {
        question: "What is the goal of a growth investment strategy?",
        options:["To generate regular income", "To achieve long-term capital appreciation", "To preserve your principal investment", "To minimize risk"],
        answer: 2
    },
    {
        question: "What does diversification mean in the context of investing?",
        options: ["Spreading your investments across different asset classes to reduce risk", "Investing all your money in one company", "Focusing on short-term investment opportunities", "Withdrawing your money from the market when it declines"],
        answer: 1
    },
    {
        question: "What is the stock market?",
        options: ["A physical location where stocks are traded", "A network of electronic exchanges where companies' shares are bought and sold", "A government agency that regulates investments", "A place where individuals can get loans"],
        answer:2
    },
];
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [answer,setAnswer]=useState('a');
    
    const changeQuestion = ()=>{
        updateScore();
        // if(currentQuestion< quizArray.length-1){
            setAnswer(quizArray[0].options[quizArray[0].answer])
            setShowResult(true)
            quizArray.sort(() => Math.random() - 0.5);
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        // }else{
        // }
    }
    const updateScore=()=>{
        if(clickedOption===quizArray[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <Layout>
    <div className='trivia'>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore='1' tryAgain={resetAll} answer={answer}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{quizArray[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {quizArray[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
    </Layout>
  )
}

export default Quiz;