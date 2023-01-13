import { useEffect, useRef } from "react";
import galleryImages from "../../data/galleryImages";
import { ModalGallery } from "./ModalGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./modalGallery.css";

export function ProductModal({ title, open, onClose, image, propsKey }) {

    const refCloseModal = useRef(null);

    const handleClickOutsideModal = (event) => {
        if (!refCloseModal.current?.contains(event.target)) {
            onClose()
        }

    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutsideModal, true)
        return () => document.removeEventListener("click", handleClickOutsideModal, false)
    }, [])



    if (!open) return null

    return (
        <div className="product_overlay">
            <div className="product_modal_container" ref={refCloseModal}>
                <div className="title_and_close">
                    <div className="gallery_modal_close" style={{ visibility: "hidden" }}>
                        <FontAwesomeIcon icon={faCircleXmark} className="btnClose" />
                    </div>
                    <h3>{title}</h3>
                    <div className="gallery_modal_close">
                        <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={onClose} />
                    </div>
                </div>
                <ModalGallery modalImages={galleryImages[propsKey]} onClose={onClose} />
                <div className="gallery_modal_close">
                    <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={onClose} />
                </div>
            </div>
        </div>
    )
}