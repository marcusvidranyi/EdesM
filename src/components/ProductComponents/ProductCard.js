
import "../../pages/products.css";
export function ProductCard(props) {
    const productCategoryImage = props.coverImg
    const productsCss = props.cssProps
    console.log(productsCss)
    return(
        <div className="productcard" style={{backgroundImage: `url(${productCategoryImage})`, backgroundPosition: productsCss}}>
            {/* <img src={props.coverImg} className="product_category_images"></img> */}
            <div className="card_content">
            <h3 className="productcard_title" >{props.title}</h3>
            </div>
        </div>
    )
}