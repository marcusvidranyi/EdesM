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
            {/* {isLoading &&
                <div className="loading_box">
                    <img
                        src={edesm_logo}
                        alt="edesm-logo-loading"
                        className="edesm-logo-loading">
                    </img>
                </div>} */}
            {/* Szia,
            Kérlek, a honlapra rakd fel az oktatóimat, linkekkel együtt:

            Alena Ujshag (https://www.facebook.com/alena.ujsag)
            Hajnal Petra (https://violetandthebotanist.com/)
            Irená Tomashi https://www.facebook.com/bebicsek

            Wolf Tamás cukrászakadémia (https://www.facebook.com/search/top?q=wolf%20tam%C3%A1s%20cukr%C3%A1szakad%C3%A9mia)

            Podmaniczky Krisztina Kricky (https://www.facebook.com/krickycakesandairbrush/)

            Nagy Violetta (tortaiskola.hu) */}

            <ExtraNavBar />
            <div className="partners">
                <h1>PARTNEREK</h1>
                <div className="partners_container">
                    
                </div>
            </div>
        </>

    )
}
