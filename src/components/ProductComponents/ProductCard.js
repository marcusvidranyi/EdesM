
import "../../pages/products.css";
export function ProductCard(props) {
    const product_category_image = props.coverImg
    return(
        <div className="productcard" style={{backgroundImage: `url(${product_category_image})`}}>
            {/* <img src={props.coverImg} className="product_category_images"></img> */}
            <div className="card_content">
            <h3 className="productcard_title" >{props.title}</h3>
            </div>
        </div>
    )
}