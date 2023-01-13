import { useState, useEffect, useCallback, useRef } from "react";
import "./imageSlider.css"


export function ImageSlider({ slides }) {

    const images = slides.map((image, index) => {
        return image.slider_image
    });

    const slidePresentationTime = 4000
    const [currentSlide, setCurrentSlide] = useState(0)


    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length);
        }, slidePresentationTime);

        return () => {
            clearInterval(sliderInterval)
        }
    });


    /* IMAGE SLIDER WITH LEFT AND RIGHT ARROW, AUTOSLIDE */

    /* const timerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]); */





    /*  useEffect(() => {
         setTimeout(() => {
             if (timerRef.current) {
                 clearTimeout(timerRef.current)
             }
             console.log("use effect");
             timerRef.current = setTimeout(() => {
                 goToNext();
             }, 3500);
 
             return () => clearTimeout(timerRef.current);
 
         }, 4000);
 
     }, [goToNext]);
  */



    /* return (
        <div className="slider_styles">
            <div onClick={goToPrevious} className="left_arrow_styles">{"<"}</div>
            <div onClick={goToNext} className="right_arrow_styles">{">"}</div>
            <div style={{ backgroundImage: slides && `url(${slides[currentIndex].slider_image})` }} className="slide_styles"></div>
        </div>
    ) */
    /* return (
        <div className="slider_styles">
            <div onClick={goToPrevious} className="left_arrow_styles">{"<"}</div>
            <div onClick={goToNext} className="right_arrow_styles">{">"}</div>
            <div style={{ backgroundImage: slides && `url(${slides[currentIndex].slider_image})` }} className="slide_styles"></div>
        </div>
    ) */

    return (
        <div className="image_slider_box">
            <div className="image_slider_content">
                <div>
                    {images.map((image, index) => (
                        <img
                            id={index}
                            key={index}
                            className={index === currentSlide ? 'image_slider_image active' : 'image_slider_image'}
                            src={image}
                            /* style={{
                                zIndex: `-${index + 1}`
                            }} */
                        />
                    ))}
                </div>
            </div>
        </div>
    );


}