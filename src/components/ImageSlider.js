import { useState, useEffect, useCallback, useRef } from "react";


export function ImageSlider({ slides }) {

    const timerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    }
    const slideStyle = {
        color: "white",
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage:
            slides && `url(${slides[currentIndex].slider_image})`,
    }
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        cursor: "pointer",
        zIndex: 3,
        opacity: "0.5",
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        cursor: "pointer",
        zIndex: 3,
        opacity: "0.5",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    useEffect(() => {
        if(timerRef.current) {
            clearTimeout(timerRef.current)
        }
        console.log("use effect");
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 3500);

        return () => clearTimeout(timerRef.current)

    }, [goToNext]);


    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>{"<"}</div>
            <div style={rightArrowStyles} onClick={goToNext}>{">"}</div>
            <div style={slideStyle}></div>
        </div>
    )
}