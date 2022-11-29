import { ExtraNavBar } from "../components/ExtraNavBar";
import { useNavigate } from "react-router-dom";
import "./faq.css"
export function Faq() {

    const navigate = useNavigate();

    return (
        <>
            <ExtraNavBar />
            <div className="faq">
                <div className="faq_text">
                    <h1 id="faq">Gyakran ismételt kérdések</h1>
                    <h3>Mennyi idővel előbb kell leadni rendelést?</h3>
                    <p>Formatortáknál, figurás és egyedi tortáknál érdemes 2 héttel előre egyeztetni, klasszikus tortáknál elegendő előző héten megrendelni.
                    </p>
                    <h3>Mikor kell fizetni?</h3>
                    <p>Egyedi és formatorta megrendelésekor előleg számlát küldök, melynek átutalásával életbe lép a megrendelés. Klasszikus, egyszerűbb torta esetén átvételkor, készpénzben.
                    </p>
                    <h3>Bankkártyával is tudok fizetni?</h3>
                    <p>Egyelőre még nem, csak készpénzben vagy előreutalással lehet fizetni</p>
                    <h3>Csak torta rendelhető?</h3>
                    <p>Rendezvényekre (esküvő, családi összejövetel, céges rendezvények) komplett desszertkinálat is rendelhető, igény szerinti süteményekkel, bonbonokkal, macaronokkal, különleges desszertekkel.
                    </p>
                    <div className="back_button_faq" onClick={() => navigate(-1)}>vissza a Főoldalra</div>
                </div>
            </div>
        </>

    )
}