import { Link } from "react-scroll";
import { useScrollPosition } from "../hooks/useScrollPosition";
import edesm_logo from "../images/edesm_logo.svg";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar() {
    const logoClickHandler = () => {
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    const scrollPosition = useScrollPosition();

    /* const lastLetterParisienne = (input) => {
        return input.slice(-1);
    } */

    return (
        <nav className="navbar-parent">
            <ul className={scrollPosition < 10 ? "navbar" : "nav_scrolled"}>
                <li className="navbar-items">
                    <Link to="main" spy={true} smooth={true} offset={-100} duration={500}>Főolda<span className="lastletter">L</span></Link>
                </li>
                <li className="navbar-items">
                    <Link to="products" spy={true} smooth={true} offset={-50} duration={500}>Kínálatun<span className="lastletter">K</span></Link>
                </li>
                <img src={edesm_logo} alt="edesm-logo" className="edesm-logo" id={scrollPosition < 10 ?
                    "edesm_logo" : "edesm_logo_scrolled"} onClick={logoClickHandler} />
                <li className="navbar-items">
                    <Link to="about_us" spy={true} smooth={true} offset={0} duration={500}>Rólun<span className="lastletter">K</span></Link>
                </li>
                <li className="navbar-items">
                    <Link to="contact" spy={true} smooth={true} offset={200} duration={500}>Elérhetősé<span className="lastletter">G</span></Link>
                </li>
            </ul>
        </nav>
    )
}
