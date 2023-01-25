import { ExtraNavBar } from "../components/ExtraNavBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./partners.css";
import edesm_logo from "../images/edesm_logo_svg.svg";

export const Partners = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
        return () => {
            setIsLoading(false);
        }



    }, [Partners]);

    return (
        <>
            {isLoading &&
                <div className="loading_box">
                    <img
                        src={edesm_logo}
                        alt="edesm-logo-loading"
                        className="edesm-logo-loading">
                    </img>
                </div>}
            <ExtraNavBar />
            <div className="partners">
                <h1>HAMAROSAN</h1>
            </div>
        </>

    )
}
