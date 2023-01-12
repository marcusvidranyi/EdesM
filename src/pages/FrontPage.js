import { NavBar } from "../components/NavBar";
import { Main } from "./Main";
import { Products } from "./Products";
import { AboutUs } from "./AboutUs";
import { Contact } from "./Contact";
import { useEffect, useState } from "react";
import edesm_logo from "../images/edesm_logo.svg";
import "./frontPage.css";


export function FrontPage() {

    





    return (
        <>
            <NavBar />
            <Main />
            <Products />
            <AboutUs />
            <Contact />
        </>
    )
}