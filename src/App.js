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
      {/* <Main />
      <Products />
      <AboutUs />
      <Contact /> */}
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
