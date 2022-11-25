import { Link } from "react-router-dom";
import "./contact.css";
import edesm_logo from "../images/edesm_logo.svg";


export function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <div className="contact_boxes">
                    <div className="contact_box_left">
                        <img src={edesm_logo} alt="edesm-logo" className="edesm-logo" />
                        <p>Elérhetőségek:</p>
                        <p style={{ color: "#FFFF" }}>ÉdesM Desszertműhely</p>
                        <p>2431 Perkáta, Dózsa György utca 22.</p>
                        <p style={{ color: "#FFFF" }}>Telefon: 06501332553, 06703240377</p>
                        <p>Email: edesmdesszert@gmail.com</p>
                    </div>
                    <div className="contact_box_right">

                        <div><div><iframe width="100%" height="800px" id="gmap_canvas" src="https://maps.google.com/maps?q=2431%20Perk%C3%A1ta%20D%C3%B3zsa%20Gy%C3%B6rgy%20utca%2022&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe></div></div>


                    </div>

                </div>
                <div className="footer_box">
                    <div className="footer_line_box">
                        <div className="footer_line"></div>
                    </div>
                    <div className="footer_links">
                        <Link to="/faq">
                            Gyakran ismételt kérdések
                        </Link>
                        <Link to="/howto">
                            Rendelés menete
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}