import "./products.css";
import { ProductCard } from "../components/ProductComponents/ProductCard";
import { ProductModal } from "../components/ProductComponents/ProductModal";
import productsData from "../data/productsData";
import { useState, useEffect } from "react";

export function Products() {

    const [openModal, setOpenModal] = useState(false);
    const [modalKey, setModalKey] = useState(0);

    const clickHandler = (key) => (event) => {
        event.preventDefault();
        setModalKey(key - 1)
        setOpenModal(true)

    }

    const cards = productsData.map(item => {
        const key = item.id
        return (
            <div key={key} onClick={clickHandler(key)} >
                <ProductCard
                    key={item.id}
                    {...item}
                />
            </div>
        )
    });


    return (
        <div className="products_container" id="products">
            <div className="between_main_and_products_container">
                <span>RENDELJEN MOST:</span><span style={{ color: "#A8894A" }}>edesmdesszert@gmail.com</span>
            </div>
            <div className="product_categry_container">
                <div className="products">
                    {cards}
                </div>
                <ProductModal open={openModal} title={productsData[modalKey].title} />
            </div>
        </div>
    )
}