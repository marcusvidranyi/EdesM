import macaron from "../images/macaron.png"
import "./aboutus.css"
export function AboutUs() {
    return (
        <div className="about_us">
            <div id="aboutus">
                <div className="content">
                    <img src={macaron} alt="macaron" className="macaron_background" />
                    {/* <div className="aboutusframes">
                        <div className="aboutus_frame">Lorem Ipsum</div>
                        <div className="aboutus_frame">Lorem Ipsum</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}