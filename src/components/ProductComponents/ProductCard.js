
import "../../pages/products.css";
export function ProductCard(props) {
    const productCategoryImage = props.coverImg;
    const productCategoryImage2 = props.coverImg2;
    const productBackgroundPosition = props.productBackgroundPosition;
    const productBackgroundSize = props.productBackgroundSize;


    return (
        <div className="productcard"
            style={{
                backgroundImage:
                    `url(${productCategoryImage}), 
                     url(${productCategoryImage2}`,
                backgroundPosition: productBackgroundPosition,
                backgroundSize: productBackgroundSize,

            }}>
            {/* <img src={props.coverImg} className="product_category_images"></img> */}
            <div className="card_content">
                <p className="productcard_title" >{props.title}</p>
            </div>
        </div>
    )
}