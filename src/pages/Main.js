import "./main.css";
import cake_background from "../images/cake_background.jpg"
export function Main() {
    return (
        <div className="main">
            <div className="main-text-box">
                <h2 className="main-text-top">TORTÁK</h2>
                <h2 className="main-text-bottom">ÉS DESSZERTEK</h2>
            </div>
            <img src={cake_background} alt="cake_background" className="cake_background" />
        </div>
    )
}