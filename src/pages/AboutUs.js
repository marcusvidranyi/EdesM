import macaron from "../images/macaron.png"
import "./aboutus.css";
import { ImageSlider } from "../components/ImageSlider";
export function AboutUs() {
    return (
        <>
        <div className="about_us">
            <div className="line_decoration"></div>
            <div id="aboutus">
                <div className="content">
                    <div className="aboutus_text">
                        <p>A torták, desszertek szeretete, elkészitésének élménye gyerekkorom óta kisér. Az új divatirányzatok, formatorták, egyedi dekorációk magukkal ragadtak, folyamatos képzéseken vettem részt, majd megnyitottam az ÉdesM Desszertműhelyt.</p>
                        <br></br>
                        <p>Ma már egy születésnap, keresztelő, családi rendezvény szinte kötelező eleme a torta, mely egyedivé, személyessé tehető, s igy  ajándékká válik.</p>

                        <br></br>
                        <p>Prémium minőségű alapanyagokkal dolgozom, melynek köszönhetően  a visszajelzések alapján megrendelőim maximálisan elégedettek.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <ImageSlider />
        </>
    )
}