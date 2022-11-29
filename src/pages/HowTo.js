import { ExtraNavBar } from "../components/ExtraNavBar";
import { useNavigate } from "react-router-dom";
import "./howTo.css"
export function HowTo() {


    const navigate = useNavigate();

    return (
        <>
            <ExtraNavBar />
            <div className="how-to">
                <div className="howto_text">
                    <h1 id="how-to">Rendelés menete</h1>
                    <h3>Fizetés menete</h3>
                    <p>Megrendelés felvétel telefonon, e-mail-ben, messengeren, viber-en vagy személyesen történik.

                        Egyedi és formatortáknál kép küldése szükséges, mely lehet akár az internetről letöltött, illetve a galériából választott torta képe.
                        Válasz 24 órán belül várható a pontos árral és a megvalósíthatósággal kapcsolatban. Amennyiben árajánlatot kell kérni beszállítóktól (egyedi virág, egyedi figura, stb.) az ő visszaigazolásuk után tudunk csak válaszolni. A speciális díszítő elemeket a beszállítók 1-2 hétre szokták vállalni.
                        Ostyaképes, fényképes torta rendelése: fénykép küldése email-ben az edesmdesszert@gmail.com illetve messengeren (ide kéne tenni a messenger linket, ha lehet) az átvételi dátum előtt minimum 5 nappal. A kiválasztott kép minősége minimum 1920x1080 pixel. Méret, iz és átvétel napjának egyeztetése a fenti elérhetőségek egyikén történik.
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