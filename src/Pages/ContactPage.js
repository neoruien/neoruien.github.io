import emailjs from "emailjs-com";
import React, { useState } from 'react';
import Title from '../components/Title';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms))
    const sendEmail = async (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'my_website_template', e.target, 'user_yePTco4WvSnmpaSd1M9xM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setIsSubmitted(true);
        await delay(2000);
        setIsSubmitted(false);
    }
    return (
        <div className="ContactPage">
            <div className="title">
                <Title title={'Contact Me'} />
            </div>
            <div className="form-container">
                <form onSubmit={sendEmail}>
                    <div className="floating-label">
                        <input type="text" required placeholder="Name" name="name" />
                        <label for="name">Name</label>
                    </div>
                    <div className="floating-label">
                        <input type="email" placeholder="Enter Email" name="email"/>
                        <label for="email">Email</label>
                    </div>
                    <div className="floating-label">
                        <input type="text" required placeholder="Enter Subject" name="subject"/>
                        <label for="subject">Subject</label>
                    </div>
                    <div>
                        <textarea required className="form-textarea" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div>
                        <div className="form-button">
                            <button type="submit" className="my-button">Send Message</button>
                        </div>
                        <p className={isSubmitted ? "show-status": "hide-status"}>Message sent!</p>
                    </div>
                </form>
            </div>
            <div className="title">
                <Title title={'Connect With Me'} />
            </div>
            <p>
                Social platforms:
            </p>
            <div className="icons">
                <abbr title="LinkedIn">
                    <a href="https://www.linkedin.com/in/neoruien/" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                    </a>
                </abbr>
                <abbr title="Gmail">
                    <a href="mailto: neoruien123@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faEnvelope} className="icon email" />
                    </a>
                </abbr>
            </div>
            <p>Portfolio platforms:</p>
            <div className="icons">
                <abbr title="GitHub">
                    <a href="https://github.com/neoruien" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faGithub} className="icon github" />
                    </a>
                </abbr>
                <abbr title="Google Play">
                    <a href="https://play.google.com/store/apps/dev?id=5396492611515241422" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faGooglePlay} className="icon googleplay" />
                    </a>
                </abbr>
            </div>
        </div>
    )
}

export default ContactPage;
