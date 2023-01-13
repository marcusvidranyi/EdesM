import "./main.css";
import sliderImages from "../data/sliderImages";
import { ImageSlider } from "../components/ImageSlider";



export function Main() {




    return (
        <div className="main">
            <div className="slideshow_overlay"></div>
            <div className="main-text-box">
                <h2 className="main-text-top">TORTÁK</h2>
                <h2 className="main-text-bottom">ÉS DESSZERTEK</h2>
            </div>
            <div className="image_slider">
                <ImageSlider slides={sliderImages} />
            </div>
            <div className="golden_line"></div>
        </div>
    )
}