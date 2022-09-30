import { Link } from "react-router-dom";
export function ExtraNavBar() {
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/" >Back</Link></li>
                {/* <li><Link to="/" >Products</Link></li>
                <li><Link to="/" >Rólunk</Link></li>
                <li><Link to="/" >Elérhetőség</Link></li> */}
            </ul>
        </nav>
        </>
    )
}