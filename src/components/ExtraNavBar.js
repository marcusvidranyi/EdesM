import { HashLink } from "react-router-hash-link";
import "./navBar.css";
import edesm_logo from "../images/edesm_logo.svg";
export function ExtraNavBar() {
    return (
        <>
            <nav className="extra-navbar-parent">
                <ul className="extra-navbar">
                    <img src={edesm_logo} alt="edesm-logo" className="edesm-logo" id="edesm_logo" />
                    <li className="extra-navbar-items"><HashLink to="/">Main</HashLink></li>
                    <li className="extra-navbar-items"><HashLink to="/#products">Products</HashLink></li>
                    <li className="extra-navbar-items"><HashLink to="/#aboutus">Rólunk</HashLink></li>
                    <li className="extra-navbar-items"><HashLink to="/#contact">Elérhetőség</HashLink></li>
                </ul>
            </nav>
        </>
    )
}