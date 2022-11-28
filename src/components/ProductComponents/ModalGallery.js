import "./modalGallery.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

export function ModalGallery({ modalImages }) {


    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);


    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(modalImages.length - 1) : setSlideNumber(slideNumber - 1)
    }
    const nextSlide = () => {
        slideNumber + 1 === modalImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    }


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
    }
    useEffect(() => {
        document.addEventListener('keydown', detectKeydown)
        return () => document.removeEventListener('keydown', detectKeydown)

    })
    
    return (
        <>
            {
                openModal &&
                <div className="sliderWrap">
                    <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide} />
                    <div className="fullScreenImage">
                        <img src={modalImages[slideNumber].cake_img} alt="SliderImage" />
                    </div>
                </div>
            }
            <div className="galleryWrap">
                {
                    modalImages && modalImages.map((slide, index) => {
                        return (
                            <div className="gallery_container"
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <div className="gallery_item">
                                    <div className="image">
                                        <img
                                            src={slide.cake_img}
                                            loading="lazy"
                                            effect="blur"
                                            className="actual_images"
                                            alt="cake images"

                                        />
                                    </div>
                                    {/* <div className="text">Lorem</div> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
