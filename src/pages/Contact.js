import { Link } from "react-router-dom";
import "./contact.css";
import edesm_logo from "../images/edesm_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUp
} from "@fortawesome/free-solid-svg-icons";
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
                <div className="linear_gradient"></div>
                <div className="contact_boxes" data-aos="fade-up">
                    <div className="contact_box_left">
                        <img src={edesm_logo} alt="edesm-logo" className="edesm-logo" />
                        <p>Elérhetőségek:</p>
                        <p style={{ color: "#FFFF" }}>ÉdesM Desszertműhely</p>
                        <p>2431 Perkáta, Dózsa György utca 22.</p>
                        <p style={{ color: "#FFFF" }}>Telefon: 06501332553, 06703240377</p>
                        <a href="mailto:edesmdesszert@gmail.com" className='main-email'>Email: edesmdesszert@gmail.com</a>
                        <h3 style={{ color: "#FFFF" }}>Kérjük, hagyjon üzenetet!</h3>
                        <form ref={form} onSubmit={sendEmail} className="contact_form">

                            <input type="text" name="user_name" placeholder="Az Ön neve" required />

                            <input type="email" name="user_email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}" placeholder="Az Ön e-mail címe" required />

                            <input type="tel" name="user_phone" placeholder="Az Ön telefonszáma (opcionális)" />

                            <textarea name="message" placeholder="Az Ön üzenete" />
                            <input type="submit" value="Elküld" className="contact_form_submitbutton" />
                        </form>
                    </div>
                    <div className="contact_box_right">

                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2431%20Perk%C3%A1ta%20D%C3%B3zsa%20Gy%C3%B6rgy%20utca%2022&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>


                    </div>

                </div>
                <div className="footer_box">
                    <div className="footer_line_box">
                        <div className="footer_line"></div>
                    </div>
                    <div className="footer_links">
                        <Link to="/faq" className="footer_faq_link">
                            Gyakran ismételt kérdések
                        </Link>
                        <div className="toTheTopWrapper">
                            <FontAwesomeIcon icon={faCircleUp} className="tothetopbutton" onClick={clickToTheTop} />
                        </div>
                        <Link to="/howto" className="footer_howto_link">
                            Rendelés menete
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}