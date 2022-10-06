import { Link } from "react-scroll";
import { useScrollPosition } from "../hooks/useScrollPosition";
import edesm_logo from "../images/edesm_logo.svg";
import "./navBar.css"

export function NavBar() {
    const logoClickHandler = () => {
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    const scrollPosition = useScrollPosition();
    
    return (
        <nav className="navbar-parent">
            <ul className={scrollPosition < 10 ? "navbar" : "nav_scrolled"}>
                <li className="navbar-items"><Link to="main" spy={true} smooth={true} offset={-100} duration={500}>FŐOLDAL</Link></li>
                <li className="navbar-items"><Link to="products" spy={true} smooth={true} offset={-100} duration={500}>KÍNÁLATUNK</Link></li>
                <img src={edesm_logo} alt="edesm-logo" className="edesm-logo" id={scrollPosition < 10 ? "edesm_logo" : "edesm_logo_scrolled"} onClick={logoClickHandler} />
                <li className="navbar-items"><Link to="aboutus" spy={true} smooth={true} offset={-100} duration={500}>RÓLUNK</Link></li>
                <li className="navbar-items"><Link to="contact" spy={true} smooth={true} offset={0} duration={500}>ELÉRHETŐSÉG</Link></li>
            </ul>
        </nav>
    )
}
