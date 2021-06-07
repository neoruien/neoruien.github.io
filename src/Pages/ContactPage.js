import emailjs from "emailjs-com";
import React from 'react';
import Title from '../components/Title';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
// import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactPage() {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'my_website_template', e.target, 'user_yePTco4WvSnmpaSd1M9xM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div>
            <div className="title">
                <Title title={'Contact'} />
            </div>
            <div className="icons">
                <a href="https://github.com/neoruien" target="_blank" rel="noopener noreferrer" className="icon-box">
                    <FontAwesomeIcon icon={faGithub} className="icon github" />
                </a>
                <a href="https://www.linkedin.com/in/neoruien/" target="_blank" rel="noopener noreferrer" className="icon-box">
                    <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                </a>
                <a href="mailto: neoruien123@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-box">
                    <FontAwesomeIcon icon={faEnvelope} className="icon email" />
                </a>
                {/* <a href="https://play.google.com/store/apps/dev?id=5396492611515241422" target="_blank" rel="noopener noreferrer" className="icon-box">
                    <FontAwesomeIcon icon={faGooglePlay} className="icon googleplay" />
                </a> */}
            </div>
            <div className="form-container">
                <form onSubmit={sendEmail}>
                    <input type="text" className="form-text" placeholder="Name" name="name"/>
                    <input type="email" className="form-text" placeholder="Enter Email" name="email"/>
                    <input type="text" className="form-text" placeholder="Enter Subject" name="subject"/>
                    <div>
                        <textarea className="form-textarea" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div>
                        <input type="submit" className="styled-button" value="Send Message"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;
