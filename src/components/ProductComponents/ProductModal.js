import galleryImages from "../../data/galleryImages";
import { ModalGallery } from "./ModalGallery";
import "./modalGallery.css";

export function ProductModal({ title, open, onClose, image, propsKey }) {
    if (!open) return null
    return (
        <div className="product_overlay">
            <div className="product_modal_container">
                <h3>{title}</h3>
                <ModalGallery modalImages={galleryImages[propsKey]} />
                <button onClick={onClose}>close</button>
            </div>
        </div>
    )
}