
import "../../pages/products.css";
export function ProductCard({coverImg, coverImg2, productBackgroundPosition, productBackgroundSize, title}) {

    return (
        <div className="productcard"
            style={{
                backgroundImage:
                    `url(${coverImg}), 
                     url(${coverImg2}`,
                backgroundPosition: productBackgroundPosition,
                backgroundSize: productBackgroundSize,

            }}>
            {/* <img src={coverImg} className="product_category_images"></img> */}
            <div className="card_content">
                <p className="productcard_title" >{title.toUpperCase()}</p>
            </div>
        </div>
    )
}