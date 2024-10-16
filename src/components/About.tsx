import React from "react";
import "./About.css";
import { Helmet } from "react-helmet"; // Import the CSS for styling

const About: React.FC = () => {
  const handleClick = () => {
    alert("Thanks! Your feedback is important to us.");
  };

  return (
    <section className="about-container">
      <Helmet>
        <title>About This Website</title>
      </Helmet>

      <h1>About This Website</h1>

      <p>
        This website is an accessibility exercise designed to demonstrate the
        importance of accessibility in web development. It showcases various
        features that can be implemented to enhance user experience for
        individuals with disabilities.
      </p>

      <h2>Helpful Resources</h2>

      <ul className={"links-list"}>
        <li>
          <a
            href="https://webaim.org/resources/contrastchecker/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Color Contrast Checker
          </a>
          : Check color contrasts to ensure they meet the AA grade (should be at
          least 4.5).
        </li>

        <li>
          <a
            href="https://htmlcolorcodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            HTML Color Codes
          </a>
          : A tool to help you pick hex colors.
        </li>

        <li>
          <a
            href="https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Landmark Navigation Extension
          </a>
          : Chrome extension to navigate through landmarks.
        </li>
      </ul>

      <div className="button-container">
        <button className="custom-button" onClick={handleClick}>
          Was this page helpful? Click here to let us know!
        </button>
      </div>
    </section>
  );
};

export default About;
