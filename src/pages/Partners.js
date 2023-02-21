import { ExtraNavBar } from "../components/ExtraNavBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./partners.css";
import edesm_logo from "../images/edesm_logo_svg.svg";
import MCI_Picture from "../images/Partner_Photos_Optimized/MCI_Picture.jpg";
import Alena_Ujshag_Picture from "../images/Partner_Photos_Optimized/Alena_Ujshag_Picture.jpg";
import Hajnal_Petra_Picture from "../images/Partner_Photos_Optimized/Hajnal_Petra_Picture.jpg";
import Irena_Tomashi_Picture from "../images/Partner_Photos_Optimized/Irena_Tomashi_Picture.jpg";
import Krisztina_Kricky_Picture from "../images/Partner_Photos_Optimized/Krisztina_Kricky_Picture.jpg";
import Tortaiskola_Picture from "../images/Partner_Photos_Optimized/Tortaiskola_Picture.jpg";
import wolf_tamas from "../images/Partner_Photos_Optimized/wolf_tamas.png";


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
            
            <div className="partners_page">
                <div className="extranavbar_partners">
                    <ExtraNavBar />
                </div>
                <div className="partners">
                    <div className="partners_container">
                        <div className="partners_container_leftColumn">
                            <h1>A legjobb partnerekkel dolgozom</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi dictum dapibus urna, quis vehicula ante. Sed congue justo leo,
                                quis molestie orci feugiat vel. Nullam id congue orci, ut auctor nibh.
                                Sed massa nisl, accumsan sit amet nisi a, faucibus hendrerit sem.
                                Donec auctor placerat cursus. Donec malesuada eu libero et efficitur.</p>
                            <div className="back_button_howto partners_back_button" onClick={() => navigate(-1)}>vissza a Főoldalra</div>
                        </div>


                        <div className="partners_section">
                            <div className="partners_logo_wrapper">
                                <a href="https://www.cukraszat.net/"><div style={{ backgroundImage: `url(${MCI_Picture})` }} className="mci"></div></a>
                                <p></p>
                            </div>
                            <div className="partners_logo_wrapper">
                                <a href="https://www.facebook.com/alena.ujsag"><div style={{ backgroundImage: `url(${Alena_Ujshag_Picture})` }} className="alena"></div></a>
                                <p>Alena Ujshag</p>
                            </div>
                            <div className="partners_logo_wrapper">
                                <a href="https://violetandthebotanist.com/"><div style={{ backgroundImage: `url(${Hajnal_Petra_Picture})` }} className="hajnal_petra"></div></a>
                            </div>
                            <div className="partners_logo_wrapper">
                                <a href="https://www.facebook.com/bebicsek"><div style={{ backgroundImage: `url(${Irena_Tomashi_Picture})` }} className="irena"></div></a>
                                <p>Irená Tomashi</p>
                            </div>
                            <div className="partners_logo_wrapper">
                                <a href="https://www.facebook.com/krickycakesandairbrush/"><div style={{ backgroundImage: `url(${Krisztina_Kricky_Picture})` }} className="default_partner_logos"></div></a>
                            </div>
                            <div className="partners_logo_wrapper">
                                <a href="https://tortaiskola.hu"><div style={{ backgroundImage: `url(${Tortaiskola_Picture})` }} className="default_partner_logos"></div></a>
                            </div>
                            <div className="partners_logo_wrapper">
                                <a href="https://www.facebook.com/search/top?q=wolf%20tam%C3%A1s%20cukr%C3%A1szakad%C3%A9mia"><div style={{ backgroundImage: `url(${wolf_tamas})` }} className="wolf_tamas"></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
