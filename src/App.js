import edesm_logo from "./images/edesm_logo.svg";
import { Route, Routes, NavLink, useLocation, Navigate } from 'react-router-dom';
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Faq } from "./pages/Faq";
import { HowTo } from "./pages/HowTo";
import { NavBar } from "./components/NavBar";
import { FrontPage } from "./pages/FrontPage";



function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Main />
      <Products />
      <AboutUs />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<FrontPage />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/howto" element={<HowTo />}/>
        <Route path="/faq" element={<Faq />} />
      </Routes>



      {/* <div className="testBox">
        <div className="logo-placeholder">
          {<img src={edesm_logo} className="sample-image"></img>}asdf
        </div>
      </div> */}
    </>
  );
}

export default App;
