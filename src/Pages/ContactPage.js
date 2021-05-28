import emailjs from "emailjs-com";
import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';
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
            {/* <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+257 7756110718'} text2={'+0333 6782 8792'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'loremipusum@hmail.com'} text2={'abcloremipsum@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'25 Paramount St, PN4 8H9 London'} text2={'United Kingdom'} title={'Address'}/>
                </div>
            </div> */}
        </div>
    )
}

export default ContactPage;
