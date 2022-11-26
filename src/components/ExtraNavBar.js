import { HashLink } from "react-router-hash-link";
import "./navBar.css";
import edesm_logo from "../images/edesm_logo.svg";
export function ExtraNavBar() {
    return (
        <>
            <nav className="extra-navbar-parent">
                <ul className="extra-navbar">
                    
                    <li className="extra-navbar-items"><HashLink to="/">Főolda<span className="lastletter">L</span></HashLink></li>
                    <li className="extra-navbar-items"><HashLink to="/#products">Kínálatun<span className="lastletter">K</span></HashLink></li>
                    <img src={edesm_logo} alt="edesm-logo" className="edesm-logo" id="edesm_logo" />
                    <li className="extra-navbar-items"><HashLink to="/#aboutus">Rólun<span className="lastletter">K</span></HashLink></li>
                    <li className="extra-navbar-items"><HashLink to="/#contact">Elérhetősé<span className="lastletter">G</span></HashLink></li>
                </ul>
            </nav>
        </>
    )
}