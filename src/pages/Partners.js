import { ExtraNavBar } from "../components/ExtraNavBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./partners.css";
import edesm_logo from "../images/edesm_logo_svg.svg";
import MCI_Picture from "../images/Partner_Photos_Optimized/MCI_Picture.jpg"

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
                <div className="partners_container">
                    <div className="partners_container_leftColumn">
                        <h1>A legjobb partnerekkel dolgozunk</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi dictum dapibus urna, quis vehicula ante. Sed congue justo leo,
                            quis molestie orci feugiat vel. Nullam id congue orci, ut auctor nibh.
                            Sed massa nisl, accumsan sit amet nisi a, faucibus hendrerit sem.
                            Donec auctor placerat cursus. Donec malesuada eu libero et efficitur.</p>
                    </div>
                    <div className="partners_section">
                        <div style={{backgroundImage: `url(${MCI_Picture})`}} className="mci"></div>
                        <div style={{backgroundImage: "url()"}}></div>
                        <div style={{backgroundImage: "url()"}}></div>
                        <div style={{backgroundImage: "url()"}}></div>
                        <div style={{backgroundImage: "url()"}}></div>
                        <div style={{backgroundImage: "url()"}}></div>
                        <div style={{backgroundImage: "url()"}}></div>
                    </div>
                </div>
            </div>
        </>

    )
}
