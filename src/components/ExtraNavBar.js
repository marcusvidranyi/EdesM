import { HashLink } from "react-router-hash-link";
export function ExtraNavBar() {
    return(
        <>
        <nav>
            <ul>
                <li><HashLink to="/">Main</HashLink></li>
                <li><HashLink to="/#products">Products</HashLink></li>
                <li><HashLink to="/#aboutus">Rólunk</HashLink></li>
                <li><HashLink to="/#contact">Elérhetőség</HashLink></li>
            </ul>
        </nav>
        </>
    )
}