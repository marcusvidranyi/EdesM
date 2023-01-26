import "./modalGallery.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderedesm from "../../images/placeholderedesm.png"

export function ModalGallery({ modalImages, onClose }) {


    const [slideNumber, setSlideNumber] = useState(0);
    const [secondOpenModal, setSecondOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setSecondOpenModal(true);


    };

    const handleCloseModal = (event) => {
        setSecondOpenModal(false)

    };
    
    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(modalImages.length - 1) : setSlideNumber(slideNumber - 1)
    };
    const nextSlide = () => {
        slideNumber + 1 === modalImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    };


    const detectKeydown = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                prevSlide();
                break;
            case "ArrowRight":
                nextSlide();
                break;
            case "Escape":
                handleCloseModal();
                break;
        };
    };

    useEffect(() => {
        document.addEventListener('keydown', detectKeydown)
        return () => document.removeEventListener('keydown', detectKeydown)

    });

    const detectKeydownModal = (event) => {
        if ((event.key === "Escape") && (!secondOpenModal)) {
            onClose(false);
            console.log("FIRE")
        };
    };

    useEffect(() => {
        document.addEventListener('keydown', detectKeydownModal)
        return () => document.removeEventListener('keydown', detectKeydownModal)

    }, [secondOpenModal]);


    /* CLOSING MODAL TO OUTSIDE CLICK */

    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);

    const handleClickOutside = (event) => {
        if ((!refOne.current?.contains(event.target)) &&
            (!refTwo.current?.contains(event.target)) &&
            (!refThree.current?.contains(event.target))) {

            handleCloseModal();
        }

    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [secondOpenModal]);
    



    return (
        <>
            {
                secondOpenModal &&
                <div className="sliderWrap">
                    <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide} ref={refTwo} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide} ref={refThree} />
                    <div className="fullScreenImage" ref={refOne} >
                        <img src={modalImages[slideNumber].cake_img} alt="SliderImage" />
                        <span className={modalImages[slideNumber].text ? "text" : ""} style={{fontSize: "24px"}}>{modalImages[slideNumber].text}</span>
                        <span>{modalImages[slideNumber].id} / {modalImages.length}</span>
                    </div>
                </div>
            }
            <div className="galleryWrap">
                {
                    modalImages && modalImages.map((slide, index) => {
                        return (
                            <div className="gallery_container"
                                key={index}
                                onClick={(event) => { handleOpenModal(index) }}
                            >
                                <div className="gallery_item">
                                    <div className="image">
                                        <LazyLoadImage
                                            effect="blur"
                                            src={slide.cake_img}
                                            width="100%"
                                            height="100%"
                                            className="actual_images"
                                            alt="cake image"
                                            placeholderSrc={placeholderedesm}
                                        />
                                    </div>
                                    <div className={slide.text ? "text" : ""}>{slide.text}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
