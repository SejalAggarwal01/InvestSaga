import React from 'react';
import Layout from '../components/Layout/Layout';
import "./Contact.css"
function Contact() {
  return (
    <Layout>
    <div className="contact">
      <div className="contact-title">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <section className="we're-here-to-help">
        <h3>We're Here to Help!</h3>
        <p>
        If you have any questions, comments, or suggestions about our investment learning web application, we encourage you to reach out to us. Our friendly support team is here to assist you.
        </p>
        </section>
        <section className="contact-options:">
        <h3>Contact Us</h3>
        <p>We'd love to hear from you! Choose the contact method that best suits your needs.</p>
        <ul>
          <li>
            <span class="contact-icon">✉️</span>
            <span class="contact-info">Email:</span>
            <a href="mailto:support@investsaga.com">support@investsaga.com</a>
            <p>This is our preferred method of contact. We aim to respond to all emails within 24 business hours.</p>
          </li>
          <li>
            <span class="contact-icon">📞</span>
            <span class="contact-info">Phone:</span>
            <a href="tel:123-456-7890">123-456-7890</a>
            <p>Please note: Phone support is available only on weekdays from 9:00 AM to 5:00 PM PST.</p>
          </li>
          <li>
            <span class="contact-icon">📲</span>
            <span class="contact-info">Twitter:</span>
            <a href="https://twitter.com/investsaga">InvestaSaga (@investsaga)</a>
            <p>Follow us for bite-sized financial insights and engage with our community.</p>
          </li>
          <li>
            <span class="contact-icon">📸</span>
            <span class="contact-info">Instagram:</span>
            <a href="https://www.instagram.com/investsaga/">@investsaga</a>
            <p>Follow us for financial tips, insights, and community engagement.</p>
          </li>
        </ul>
        </section>
        <section className="what-we-can-help-you-with">
        <h3>What We Can Help You With:</h3>
        <ul>
          <li>
            Using the Web Application: We can help you navigate the web application, understand its features, and answer any questions you may have about completing lessons or playing games.
          </li>
          <li>
            Technical Issues: If you encounter any technical difficulties while using the web application, please contact us at <a href="mailto:www.techsupport@investsaga.com">techsupport@investsaga.com</a>.
          </li>
          <li>
            Feedback and Suggestions: We value your feedback and suggestions. Share your thoughts on how we can improve the learning experience at <a href="mailto:www.feedback@investsaga.com">feedback@investsaga.com</a>.
          </li>
        </ul>
        </section>
        <section className="additional-resources">
        <h3>Additional Resources:</h3>
        <p>
          You may find answers to frequently asked questions on our <a href="linktoFAQsPage">FAQs page</a>.<br></br>
        </p>
        </section>
        <section className="thank-you-for-contacting-us">
        <h5>Thank you for contacting us!</h5>
        </section>
        <section className="we-look-forward-to-hearing-from-you">
        <h6>We look forward to hearing from you.</h6>
        </section>
      </div>
    </div>
    </Layout>
  );
}

export default Contact;