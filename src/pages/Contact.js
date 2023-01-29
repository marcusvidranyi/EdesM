import { Link } from "react-router-dom";
import "./contact.css";
import edesm_logo from "../images/edesm_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
/* import facebook2 from "../images/icons/facebook2.png"; */
import React, { useRef } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';


export function Contact() {
    const clickToTheTop = () => {
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mcdyvhq', 'template_s106rl8', form.current, '5XkFYpvBwSaEXEGXt')
            .then((result) => {
                console.log(result.text);
                alert("üzenet elküldve!")
            }, (error) => {
                console.log(error.text);
                alert("üzenetet nem sikerült elküldeni!")
            });
    };


    return (
        <>
            <div className="contact" id="contact">
                <div className="linear_gradient_contact_page"></div>
                <div className="contact_boxes" data-aos="fade-up">

                    {/* FORM */}

                    <div className="contact_box_left">
                        <h2 style={{ color: "#FFFF" }}>Küldjön Üzenetet!</h2>
                        <form ref={form} onSubmit={sendEmail} className="contact_form">
                            <div className="row50">
                                <div className="inputBox">
                                    <span>Vezetéknék</span>
                                    <input type="text" name="last_name" placeholder="Kovács" required />
                                </div>
                                <div className="inputBox">
                                    <span>Keresztnév</span>
                                    <input type="text" name="first_name" placeholder="János" required />
                                </div>
                            </div>
                            <div className="row50">
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input type="email" name="user_email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}" placeholder="Az Ön e-mail címe" required />
                                </div>
                                <div className="inputBox">
                                    <span>Telefon</span>
                                    <input type="tel" name="user_phone" placeholder="Az Ön telefonszáma (opcionális)" />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <span>Üzenet</span>
                                    <textarea name="message" placeholder="Az Ön üzenete" />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <input type="submit" value="Elküld" className="contact_form_submitbutton" />
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* INFO */}

                    <div className="contact_box_second">
                        <h3>Elérhetőségek:</h3>
                        <div className="infobox">
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <p>2431 Perkáta, Dózsa György utca 22.</p>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <a href="mailto:edesmdesszert@gmail.com" style={{ color: "#FFFF" }}>Email: edesmdesszert@gmail.com</a>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <a href="tel:+36703240377" style={{ color: "#FFFF" }}>Telefon: +36501332553, +36703240377</a>
                            </div>
                            <ul className="social_media_links">
                                <li><a href="https://www.facebook.com/EdesMDesszertmuhely"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookMessenger} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* MAP */}

                    <div className="contact_box_map">

                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2431%20Perk%C3%A1ta%20D%C3%B3zsa%20Gy%C3%B6rgy%20utca%2022&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>


                    </div>


                </div>

                {/* FOOTER */}


                <div className="footer_box">
                    <div className="footer_links">
                        <Link to="/faq" className="footer_faq_link">
                            GYAKRAN ISMÉTELT KÉRDÉSEK
                        </Link>
                        <Link to="/termsandconditions" className="footer_aszf_link">
                            ÁSZF
                        </Link>
                        <div className="toTheTopWrapper">
                            <FontAwesomeIcon icon={faCircleUp} className="tothetopbutton" onClick={clickToTheTop} />
                        </div>
                        <Link to="/howto" className="footer_howto_link">
                            RENDELÉS MENETE
                        </Link>
                        <Link to="/partners" className="footer_partners_link">
                            PARTNEREK
                        </Link>
                    </div>

                    <div className="footer_line_box">
                        <div className="footer_line"></div>
                    </div>

                </div>
            </div>
        </>
    )
}