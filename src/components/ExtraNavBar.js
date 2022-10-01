import { HashLink } from "react-router-hash-link";
export function ExtraNavBar() {
    return(
        <>
        <nav>
            <ul className="extra-navbar">
                <li className="extra-navbar-items"><HashLink to="/">Main</HashLink></li>
                <li className="extra-navbar-items"><HashLink to="/#products">Products</HashLink></li>
                <li className="extra-navbar-items"><HashLink to="/#aboutus">Rólunk</HashLink></li>
                <li className="extra-navbar-items"><HashLink to="/#contact">Elérhetőség</HashLink></li>
            </ul>
        </nav>
        </>
    )
}