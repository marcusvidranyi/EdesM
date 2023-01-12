import { Route, Routes, NavLink, useLocation, Navigate } from 'react-router-dom';
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Faq } from "./pages/Faq";
import { HowTo } from "./pages/HowTo";
import { NavBar } from "./components/NavBar";
import { FrontPage } from "./pages/FrontPage";
import { useState, useEffect } from "react";
import edesm_logo from "./images/edesm_logo.svg";



function App() {

  const [isLoading, setIsLoading] = useState(false);





  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2600)
    return () => {
      setIsLoading(false);
    }
  }, [])

  return (
    <>
      {isLoading &&
        <div className="loading_box">
          <div className='spinner-box'>
            <div className='circle-box'>
              <div className='circle-core'></div>
            </div>
          </div>
          <img src={edesm_logo} alt="edesm-logo-loading" className="edesm-logo-loading"></img></div>}
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
