
import "../../pages/products.css";
export function ProductCard(props) {
    return(
        <div className="productcard">
            <img src={props.coverImg} className="product_category_images"></img>
            <h3 className="productcard-title">{props.title}</h3>
        </div>
    )
}