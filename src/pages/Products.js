import "./products.css";
import { ProductCard } from "../components/ProductComponents/ProductCard"
import productsData from "../data/productsData";

export function Products() {

    const cards = productsData.map(item => {
        return (
            <ProductCard
                key={item.id}
                {...item}
            />
        )
    })


    return (
        <div className="products_container">
            <div className="between_main_and_products_container">
                <span>RENDELJEN MOST:</span><span style={{ color: "#A8894A" }}>edesmdesszert@gmail.com</span>
            </div>
            <div className="products">
                {cards}
            </div>
        </div>
    )
}