import "./main.css";
import sliderImages from "../data/sliderImages";
import { ImageSlider } from "../components/ImageSlider";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";



export function Main() {

    const [cardActive, setCardActive] = useState("side_pop_up");

    useEffect(() => {
        setTimeout(() => {
            setCardActive("side_pop_up side_pop_up_active");
        }, 4000)
    }, []);


    /* const closeNews = () => {
        setCardActive("side_pop_up")
    }
 */
    const goToArticle = () => {
        window.open("https://www.penzcentrum.hu/otthon/20230817/itt-a-friss-lista-ezekben-a-cukraszdakban-lesz-kaphato-magyarorszag-tortaja-2023-ban-1140228")
    }

    return (
        <div className="main">
            {<div className={cardActive} onClick={goToArticle} style={{cursor: "pointer"}}>                               
                {/* <FontAwesomeIcon icon={faCircleXmark} className="closeNewsButton" onClick={closeNews}/> */}
            </div>}
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