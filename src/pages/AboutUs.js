import "./aboutus.css";
import Aos from "aos";
import "aos/dist/aos.css";


export function AboutUs() {
    return (
        <>
            <div className="about_us" id="about_us">
                <div className="firstbox"></div>
                <div className="secondbox" data-aos="fade-right"><p>A torták, desszertek szeretete, elkészitésének élménye gyerekkorom óta kisér. Az új divatirányzatok, formatorták, egyedi dekorációk magukkal ragadtak, folyamatos képzéseken vettem részt, majd megnyitottam az ÉdesM Desszertműhelyt.</p>
                    <br></br>
                    <p>Ma már egy születésnap, keresztelő, családi rendezvény szinte kötelező eleme a torta, mely egyedivé, személyessé tehető, s igy  ajándékká válik.</p>

                    <br></br>
                    <p>Prémium minőségű alapanyagokkal dolgozom, melynek köszönhetően  a visszajelzések alapján megrendelőim maximálisan elégedettek.
                    </p></div>
            </div>
        </>
    )
}