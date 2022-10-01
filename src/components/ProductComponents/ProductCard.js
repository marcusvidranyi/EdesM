
import "../../pages/products.css";
export function ProductCard(props) {
    console.log(props.title)
    return(
        <div className="productcard">
            <img src={props.coverImg}></img>
            <h3 className="productcard-title">{props.title}</h3>
        </div>
    )
}