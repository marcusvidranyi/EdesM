import "./products.css";
import { ProductCard } from "../components/ProductComponents/ProductCard";
import { ProductModal } from "../components/ProductComponents/ProductModal";
import productsData from "../data/productsData";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

export function Products() {

    const [openModal, setOpenModal] = useState(false);
    const [modalKey, setModalKey] = useState(0);

    const clickHandler = (key) => (event) => {
        event.preventDefault();
        setModalKey(key - 1);
        setOpenModal(true);
    }

    const clickHandlerMailto = (event) => {
        event.preventDefault();
        window.location = 'mailto:edesmdesszert@gmail.com';

    }

    const cards = productsData.map(item => {
        const key = item.id
        return (
            <div key={key} data-aos="zoom-in" onClick={clickHandler(key)} className="productcard-container">
                <ProductCard
                    key={item.id}
                    {...item}
                />
            </div>
        )
    });

    /* CLOSING MODAL TO OUTSIDE CLICK */

    const refCloseModal = useRef(null);

    /* const handleClickOutsideModal = event => {
        if (!refCloseModal.current?.contains(event.target)) {
            setOpenModal(false)
            console.log("handleClickOutsideModal")
        }

    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutsideModal, true)
        return () => document.removeEventListener("click", handleClickOutsideModal, false)
    }) */

    /* SCROLL ANIMATION */

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div className="products_container" id="products">
            <div className="between_main_and_products_container" data-aos="fade-up">
                <span>RENDELJEN MOST:</span>
                <span style={{ color: "#A8894A" }}>
                    <FontAwesomeIcon icon={faEnvelope} className="main-mail-icon" onClick={clickHandlerMailto} />
                    <a href="mailto:edesmdesszert@gmail.com" className='main-email'>edesmdesszert@gmail.com</a>
                    
                </span>
            </div>
            <div className="product_categry_container">
                <div className="products" >
                    {cards}
                </div>
                <div className="product_modal" ref={refCloseModal}>
                    <ProductModal
                        open={openModal}
                        onClose={() => { setOpenModal(false) }}
                        title={productsData[modalKey].title}
                        image={productsData[modalKey].modalImg}
                        propsKey={modalKey} />
                </div>
            </div>
        </div>
    )
}