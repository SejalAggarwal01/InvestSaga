import React from 'react';
import Layout from '../components/Layout/Layout';
import './Faqs.css';
function FAQs() {
    return (
        <Layout>
      <div className="faqs">
      <div className="faqs-title">
        <h1>FAQs</h1>
      </div>
      <div className="faqs-content">
        <section className="general-questions">
        <h3>General Questions</h3>
        <ul>
            <li><h6>What is this web application for?</h6><p>o	This web application is designed to help you learn about investing, regardless of your experience level. We offer educational lessons, interactive games, and a fun way to build your financial knowledge.</p></li>
            <li><h6>Is there a cost to use this web application?</h6><p>o	The web application is free to use! You can access a wide range of learning materials and games without any cost. We may offer optional features in the future.</p></li>
            <li><h6>What do I earn by completing lessons and games?</h6><p>o	You'll earn scores for completing lessons and games successfully. Higher scores indicate a better understanding of the covered topics.</p></li>
        </ul>
        </section>
        <section className="learning-path">
        <h3>Learning Path</h3>
        <ul>
            <li><h6>How are the lessons structured?</h6><p>o	Our lessons are organized by difficulty level (beginner, intermediate, advanced). Each lesson covers a specific investment topic and includes clear explanations, examples, and key takeaways.</p></li>
            <li><h6>Can I revisit lessons I've already completed?</h6><p>o	Absolutely! You can revisit any lesson at any time to refresh your memory or explore a topic in more depth.</p></li>
            <li><h6>Do I need to complete lessons in order?</h6><p>o	No, you can choose the lessons that interest you most. However, following the suggested learning path will provide a more structured approach to building your investment knowledge.</p></li>
        </ul>
        </section>
        <section className="games">
        <h3>Games</h3>
        <ul>
            <li><h6>What types of games are available?</h6><p>o	We offer a variety of interactive games, including hangman, trivia, and word search puzzles, all with an investment theme. These games are a fun way to test your knowledge and reinforce what you've learned.</p></li>
            <li><h6>How difficult are the games?</h6><p>o	The difficulty of the games varies depending on the level you're playing. We offer easy, medium, and challenging games to cater to all learning levels.</p></li>
            <li><h6>Can I replay the games?</h6><p>o	Yes, you can replay any game as many times as you like. This is a great way to practice and improve your understanding of investment concepts.</p></li>
        </ul>
        </section>
        <section className="technical-questions">
        <h3>Technical Questions</h3>
        <ul>
            <li><h6>What web browsers does this application work on?</h6><p>o	The web application is compatible with most popular web browsers (e.g., Chrome, Firefox, Safari).</p></li>
            <li><h6>Do I need an internet connection to use the web application?</h6><p>o	Yes, an internet connection is required to access all features of the web application.</p></li>
            <li><h6>How do I contact support if I have a question?</h6><p>o	We're here to help! You can contact our support team through the web application's built-in messaging system or by emailing us at <a href='support@investsaga.com'>support@investsaga.com.</a></p></li>
        </ul>
        </section>
        <h6>Don't see your question answered here? Feel free to contact our support team at support@investsaga.com.</h6>        
      </div>
    </div>
    </Layout>
          );
}

export default FAQs;