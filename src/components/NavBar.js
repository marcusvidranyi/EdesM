import { Link } from "react-scroll";
import edesm_logo from "../images/edesm_logo.svg";
import "./navBar.css"

export function NavBar() {
    return (
        <nav className="navbar-parent">
            <ul className="navbar">
                <img src={edesm_logo} alt="edesm-logo"className="edesm-logo" id="edesm_logo"/>
                <li className="navbar-items"><Link to="main" spy={true} smooth={true} offset={-100} duration={500}>FŐOLDAL</Link></li>
                <li className="navbar-items"><Link to="products" spy={true} smooth={true} offset={0} duration={500}>TERMÉKEK</Link></li>
                <li className="navbar-items"><Link to="aboutus" spy={true} smooth={true} offset={0} duration={500}>RÓLUNK</Link></li>
                <li className="navbar-items"><Link to="contact" spy={true} smooth={true} offset={0} duration={500}>ELÉRHETŐSÉG</Link></li>
            </ul>
        </nav>
    )
}
