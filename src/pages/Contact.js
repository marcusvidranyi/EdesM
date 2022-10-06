import { Link } from "react-router-dom";
import "./contact.css"
export function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                
                <Link to="/faq">
                   Gyakran ismételt kérdések
                </Link>
                <Link to="/howto">
                    Rendelés menete
                </Link>
            </div>
        </>
    )
}