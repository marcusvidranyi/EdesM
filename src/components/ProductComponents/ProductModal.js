import galleryImages from "../../data/galleryImages";

export function ProductModal({ title, open, onClose,  image, propsKey }) {
    if (!open) return null

    /* const weddingImages = weddingCakes.map(item => {
        const key = item.id
        return(
            
        )
    }) */
    console.log(propsKey)
    return (
        <div className="product_overlay">
            <div className="product_modal_container">
                <h3>{title}</h3>
                <img src={image} />
                <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                <button onClick={onClose}>close</button>
            </div>
        </div>
    )
}