import "./modalGallery.css";
import { useState } from "react";

export function ModalGallery({ modalImages }) {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="galleryWrap">
                {
                    modalImages && modalImages.map((slide, index) => {
                        return (
                            <div className="gallery_container" key={index}>
                                <div className="gallery_item">
                                    <div className="image">
                                        <img src={slide.cake_img} alt="cake images" />
                                    </div>
                                    <div className="text">Random</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
