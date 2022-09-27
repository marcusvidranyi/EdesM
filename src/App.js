import edesm_logo from "./images/edesm_logo.svg";
import { Route, Routes } from "react-router-dom";
import {Main} from "./pages/Main";
import {Products} from "./pages/Products";
import {AboutUs} from "./pages/AboutUs";
import {Contact} from "./pages/Contact";
import {Faq} from "./pages/Faq";
import {HowTo} from "./pages/HowTo";
import { HashLink as Link} from "react-router-hash-link";

function App() {
  return (
    <>
    <Link to="#main" smooth>
      Main
    </Link>
    <Link to="#products" smooth>
      Products
    </Link>
    <Link to="#aboutus" smooth>
      Rólunk
    </Link>
    <Link to="#contact" smooth>
      Elérhetőség
    </Link>
    <Main />
    <Products />
    <AboutUs />
    <Contact /> 
      {/* <div className="testBox">
        <div className="logo-placeholder">
          {<img src={edesm_logo} className="sample-image"></img>}asdf
        </div>
      </div> */}
    </>
  );
}

export default App;
