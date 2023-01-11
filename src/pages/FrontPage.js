import { NavBar } from "../components/NavBar";
import { Main } from "./Main";
import { Products } from "./Products";
import { AboutUs } from "./AboutUs";
import { Contact } from "./Contact";
import { useEffect, useState } from "react";
import edesm_logo from "../images/edesm_logo.svg";
import "./frontPage.css";


export function FrontPage() {

    /* const [isLoading, setIsLoading] = useState(true);





    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3500)
    }, []) */





    return (
        <>
            {/* {isLoading &&
                <div className="loading_box">
                    <img src={edesm_logo} alt="edesm-logo-loading" className="edesm-logo-loading"></img></div>} */}
            <NavBar />
            <Main />
            <Products />
            <AboutUs />
            <Contact />
        </>
    )
}