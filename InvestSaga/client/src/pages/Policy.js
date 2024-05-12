import React from 'react';
import Layout from '../components/Layout/Layout';
import './Policy.css';
function Policy() {
  return (
    <Layout>
    <div className="policy">
      <div className="policy-content">
        <h1>Privacy Policy</h1>
        <section className="information-we-collect">
          <h2>Information We Collect</h2>
          <p>
            We collect information to provide and improve the InvestSaga web
            application. This information falls into three categories:
          </p>
          <ul>
            <li>
              <b>Personal Information:</b> When you create an account, we may
              collect personally identifiable information such as your name
              and email address. This information is used to identify you
              within the application and personalize your learning experience.
              We verify that you are at least 21 years old during the account
              creation process.
            </li>
            <li>
              <b>Usage Data:</b> We may collect data about how you use the
              web application, such as the lessons you complete, the games
              you play, and your scores. This data is used to improve the
              application and personalize recommendations for future learning.
            </li>
            <li>
              <b>Technical Data:</b> We may collect technical data about your
              device, such as your IP address, browser type, and operating
              system. This data is used for troubleshooting purposes and to
              ensure the application functions properly on various devices.
            </li>
          </ul>
        </section>
        <section className="how-we-use-your-information">
          <h2>How We Use Your Information</h2>
          <p>We use your information for several purposes:</p>
          <ul>
            <li>
              Provide and improve the web application: This includes creating
              your account, personalizing your learning path, and tracking your
              progress.
            </li>
            <li>
              Send important updates: We may use your information to send you
              important updates about the web application, such as new features
              or content.
            </li>
            <li>
              Research: We may use anonymized usage data for research purposes
              to improve the overall learning experience for users within the
              21-65 age range.
            </li>
          </ul>
        </section>
        <section className="information-sharing-and-disclosure">
          <h2>Information Sharing and Disclosure</h2>
          <p>
            We will not share your personal information with third parties
            without your consent, except in the following cases:
          </p>
          <ul>
            <li>Legal requirements: To comply with legal requirements or respond to lawful requests from law enforcement.</li>
            <li>Rights and safety: To protect the rights and safety of ourselves or others.</li>
            <li>Mergers and acquisitions: In the event of a merger, acquisition, or asset sale, your information may be transferred to the new owner.</li>
          </ul>
        </section>
        <section className="data-security">
          <h2>Data Security</h2>
          <ul>
            <li>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction.</li>
            <li>However, no internet transmission or electronic storage method is completely secure.</li>
          </ul>
        </section>
        <section className="your-choices">
          <h2>Your Choices</h2>
          <p>You have control over your information:</p>
          <ul>
            <li>
              Access and update: You can access and update your personal
              information through your account settings.
            </li>
            <li>Opt-out of marketing: You can opt out of receiving marketing communications from us by following the unsubscribe instructions in those communications.</li>
          </ul>
        </section>
        <section className="childrens-privacy">
          <h2>Children's Privacy</h2>
          <p>
            Our web application is not intended for children under the age of
            13. We do not knowingly collect personal information from children
            under 13. We take additional precautions to verify that users
            are at least 21 years old during account creation.
          </p>
        </section>
        <section className="changes-to-this-policy">
          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will
            notify you of any changes by posting the new Privacy Policy on
            this page.
          </p>
        </section>
        <section className="contact-us">
          <h2>Contact Us</h2>
          <ul>
            <li>If you have any questions about this Privacy Policy, please contact us at <a href='support@investsaga.com'>support@investsaga.com.</a></li>
          </ul>
        </section>
      </div>
    </div>
    </Layout>
  );

}

export default Policy;