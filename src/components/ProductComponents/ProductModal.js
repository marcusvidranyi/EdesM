import galleryImages from "../../data/galleryImages";
import { ModalGallery } from "./ModalGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./modalGallery.css";

export function ProductModal({ title, open, onClose, image, propsKey }) {
    if (!open) return null
    return (
        <div className="product_overlay">
            <div className="product_modal_container">
                <div className="title_and_close">
                    <h3>{title}</h3>
                    <div  className="gallery_modal_close"><FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={onClose} /></div>
                </div>
                <ModalGallery modalImages={galleryImages[propsKey]} />
                <div  className="gallery_modal_close"><FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={onClose} /></div>
            </div>
        </div>
    )
}