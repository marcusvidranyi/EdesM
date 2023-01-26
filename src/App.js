import { Route, Routes, NavLink, useLocation, Navigate } from 'react-router-dom';
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Faq } from "./pages/Faq";
import { HowTo } from "./pages/HowTo";
import { Partners } from "./pages/Partners";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { NavBar } from "./components/NavBar";
import { FrontPage } from "./pages/FrontPage";
import { useState, useEffect } from "react";





function App() {

/* LOADING ANIMATION */
  const [isLoading, setIsLoading] = useState(true);

  function someRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loading_box");
      if (loaderElement) {
        loaderElement.remove();
        setIsLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
///////////////////////////

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
}

export default App;
