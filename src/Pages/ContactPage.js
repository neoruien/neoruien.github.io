import emailjs from "emailjs-com";
import React, { useState } from "react";
import Title from "../components/Title";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as config from "../config/contact-config";
import { Helmet } from "react-helmet";

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(config.serviceId, config.templateId, e.target, config.userId)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsSubmitted(true);
    await delay(2000);
    setIsSubmitted(false);
  };
  return (
    <div className="ContactPage">
      <Helmet title="Contact" />
      <div className="title">
        <Title title={"Contact Me"} />
      </div>
      <div className="icons">
        <abbr title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/neoruien/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-box"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </a>
        </abbr>
        <abbr title="Gmail">
          <a
            href="mailto: neoruien123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-box"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon email" />
          </a>
        </abbr>
        <abbr title="GitHub">
          <a
            href="https://github.com/neoruien"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-box"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>
        </abbr>
        {/* <abbr title="Tableau">
                    <a href="https://public.tableau.com/profile/neo.rui.en#!/" target="_blank" rel="noopener noreferrer" className="icon-box">
                    <svg className="tableau" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.3 59.5">
                        <path d="M28.5 40.2h3.3v-9h8.3V28h-8.3v-9h-3.3v9h-8.2v3.2h8.2z"/>
                        <path d="M13.2 53.2H16v-8h7.4v-2.5H16v-8.1h-2.8v8.1H5.8v2.5h7.4z"/>
                        <path d="M44.3 24.3h2.8v-8h7.5v-2.4h-7.5V5.8h-2.8v8.1h-7.4v2.4h7.4z"/>
                        <path d="M29 59.5h2.4v-5.7h5.1v-2.1h-5.1V46H29v5.7h-5v2.1h5z"/>
                        <path d="M13.3 24.3h2.6v-8.1h7.5v-2.3h-7.5V5.8h-2.6v8.1H5.8v2.3h7.5z"/>
                        <path d="M52.8 36.3h2.4v-5.6h5.1v-2.2h-5.1v-5.6h-2.4v5.6h-5v2.2h5z"/>
                        <path clip-rule="evenodd" d="M44.3 53.2h2.8v-8h7.5v-2.5h-7.5v-8.1h-2.8v8.1h-7.4v2.5h7.4z" fill-rule="evenodd"/>
                        <path d="M36.1 7.2V5.5h-5V0h-1.8v5.5h-5v1.7h5v5.5h1.8V7.2zM5 35.9h1.8v-5.5h5v-1.7h-5v-5.4H5v5.4H0v1.8l5-.1z"/>
                    </svg>
                    </a>
                </abbr>
                <abbr title="Google Play">
                    <a href="https://play.google.com/store/apps/dev?id=5396492611515241422" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faGooglePlay} className="icon googleplay" />
                    </a>
                </abbr> */}
      </div>
      <div className="form-container">
        <form onSubmit={sendEmail}>
          <div className="floating-label">
            <input type="text" required placeholder="Name" name="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="floating-label">
            <input type="email" placeholder="Enter Email" name="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="floating-label">
            <input
              type="text"
              required
              placeholder="Enter Subject"
              name="subject"
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div>
            <textarea
              required
              className="form-textarea"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div>
            <div className="form-button">
              <button type="submit" className="my-button">
                Send Message
              </button>
            </div>
            <p className={isSubmitted ? "show-status" : "hide-status"}>
              Message sent!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
