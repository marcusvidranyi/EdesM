import { Link } from "react-scroll";
import "./navBar.css"

export function NavBar() {
    return (
        <nav className="navbar-parent">
            <ul className="navbar">
                <li className="navbar-items"><Link to="main" spy={true} smooth={true} offset={0} duration={500}>Main</Link></li>
                <li className="navbar-items"><Link to="products" spy={true} smooth={true} offset={0} duration={500}>Products</Link></li>
                <li className="navbar-items"><Link to="aboutus" spy={true} smooth={true} offset={0} duration={500}>Rólunk</Link></li>
                <li className="navbar-items"><Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Elérhetőség</Link></li>
            </ul>
        </nav>
    )
}
