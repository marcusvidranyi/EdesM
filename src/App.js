import edesm_logo from "./images/edesm_logo.svg"

function App() {
  return (
    <>
    
    <div className="testBox">
      <div className="logo-placeholder">
      {<img src={edesm_logo} className="sample-image"></img>}
      </div>
    </div>
    </>
  );
}

export default App;
