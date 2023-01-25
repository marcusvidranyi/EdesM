import { ExtraNavBar } from "../components/ExtraNavBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./howTo.css";
import edesm_logo from "../images/edesm_logo_svg.svg";

export function HowTo() {


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



    }, [HowTo]);

    return (
        <>
            {isLoading &&
                <div className="loading_box">
                    <div className='spinner-box'>
                        <div className='circle-box'>
                            <div className='circle-core'></div>
                        </div>
                    </div>
                    <img
                        src={edesm_logo}
                        alt="edesm-logo-loading"
                        className="edesm-logo-loading">
                    </img>
                </div>}
            <ExtraNavBar />
            <div className="how-to">
                <div className="howto_text">
                    <h1 id="how-to">Rendelés menete</h1>
                    <h3>Fizetés menete</h3>
                    <p>Megrendelés felvétel telefonon, e-mail-ben, messengeren, viber-en vagy személyesen történik.

                        Egyedi és formatortáknál kép küldése szükséges, mely lehet akár az internetről letöltött, illetve a galériából választott torta képe.
                        Válasz 24 órán belül várható a pontos árral és a megvalósíthatósággal kapcsolatban. Amennyiben árajánlatot kell kérni beszállítóktól (egyedi virág, egyedi figura, stb.) az ő visszaigazolásuk után tudunk csak válaszolni. A speciális díszítő elemeket a beszállítók 1-2 hétre szokták vállalni.
                        Ostyaképes, fényképes torta rendelése: fénykép küldése email-ben az <a href="mailto:edesmdesszert@gmail.com">edesmdesszert@gmail.com</a> illetve <a href="https://www.facebook.com/EdesMDesszertmuhely">messengeren</a> az átvételi dátum előtt minimum 5 nappal. A kiválasztott kép minősége minimum 1920x1080 pixel. Méret, iz és átvétel napjának egyeztetése a fenti elérhetőségek egyikén történik.
                    </p>
                    <h3>Fizetési feltételek</h3>
                    <p> Egyedi és esküvői torta rendelése esetén megrendeléskor 50% foglaló fizetendő, a fennmaradó összeg   átvétel előtt átutalással vagy az átvétel  napján, készpénzben fizetendő.
                        Klasszikus torta rendelése esetén fizetés átvételkor.
                    </p>
                    <div className="back_button_howto" onClick={() => navigate(-1)}>vissza a Főoldalra</div>
                </div>

            </div>

        </>
    )
}