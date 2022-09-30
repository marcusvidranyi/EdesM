import { HashLink as Link } from "react-router-hash-link";

export function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="#main" smooth>Main</Link></li>
                <li><Link to="#products" smooth>Products</Link></li>
                <li><Link to="#aboutus" smooth>Rólunk</Link></li>
                <li><Link to="#contact" smooth>Elérhetőség</Link></li>
            </ul>
        </nav>
    )
}
