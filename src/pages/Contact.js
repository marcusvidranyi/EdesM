import { Link } from "react-router-dom";

export function Contact() {
    return (
        <>
            <div className="contact">
                <h1 id="contact">Elérhetőség</h1>
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