import "./main.css";
import cake_background from "../images/cake_background_2.jpg";
import sliderImages from "../data/sliderImages";
import { ImageSlider } from "../components/ImageSlider";
export function Main() {



    return (
        <div className="main">
            <div className="main-text-box">
                <h2 className="main-text-top">TORTÁK</h2>
                <h2 className="main-text-bottom">ÉS DESSZERTEK</h2>
            </div>
            {/* <img src={cake_background} alt="cake_background" className="cake_background" /> */}
            <div className="image_slider">
                <ImageSlider slides={sliderImages} />
            </div>

        </div>
    )
}