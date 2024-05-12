import React from 'react';
import Layout from '../components/Layout/Layout'
import './About.css';
function About() {
  return (
    <Layout>
    <div className="about">
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <section className="our-mission">
        <h3>Our Mission:</h3>
        <p>
          We believe that financial literacy empowers individuals to make informed investment decisions and achieve their financial goals. Our mission is to provide a user-friendly and accessible web application that simplifies investment learning for everyone, regardless of background or experience level.
        </p>
        </section>
        <section className="The Team">
        <h3>The Team:</h3>
        <p>
          Our team is comprised of passionate professionals with diverse backgrounds in finance, education, and technology. We are all committed to creating a valuable resource that fosters financial confidence and independence.
        </p>
        <ul>
          <li>Jyothi Surekha Ayinavilli</li>
          <li>Mitali Rajesh Chavan</li>
          <li>Sejal Agarwal</li>
          <li>Veda Sai Priya Inukurthi</li>
          <li>Alekhya Oruganti</li>
        </ul>
        </section>
        <section className="why-we-do-this">
        <h3>Why We Do This:</h3>
        <p>
          We understand that navigating the world of investments can be overwhelming for beginners. We want to break down complex financial concepts into easily digestible lessons and engaging games. Our goal is to make learning about investing enjoyable and accessible, so you can confidently take control of your financial future.
        </p>
        </section>
        <section className="what-we-offer">
        <h3>What We Offer:</h3>
        <ul>
          <li>Structured Learning Path: Our learning path is designed to take you on a journey, starting with foundational investment concepts and progressing to more advanced topics.</li>
          <li>Interactive Games: Reinforce your learning and test your knowledge with fun and engaging investment-themed games like hangman, trivia, and word search puzzles.</li>
          <li>Track Your Progress: Monitor your progress as you complete lessons and games, and celebrate your achievements.</li>
        </ul>
        </section>
        <section className="join-us-on-your-investment-journey">
        <h3>Join Us on Your Investment Journey:</h3>
        <p>
          We are constantly working on improving the web application and adding new content to ensure you have the resources you need to become a well-informed investor. We encourage you to explore the application, play the games, and reach out to us if you have any questions.
        </p>
        </section>
        <section className="stay-connected">
        <h2>Stay Connected</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/investsaga/">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/investsaga/">Twitter</a>
          </li>
          <li>
            <a href="mailto:aboutus@investsaga.com">aboutus@investsaga.com</a>
          </li>
        </ul>
      </section>
      </div>
    </div>
    </Layout>
  );
}

export default About;