import emailjs from "emailjs-com";
import React from 'react';
import Title from '../components/Title';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';
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
                <a href="https://play.google.com/store/apps/dev?id=5396492611515241422" target="_blank" rel="noopener noreferrer" className="icon-box">
                    <FontAwesomeIcon icon={faGooglePlay} className="icon googleplay" />
                </a>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Enter Email" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Enter Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;
