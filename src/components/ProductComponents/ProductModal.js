

export function ProductModal({ title, open, image }) {
    if(!open) return null
    return(
        <div>
            <h3>{title}</h3>
            <img src={image} />
            <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
        </div>
    )
}