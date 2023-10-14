import deff from "./../../assets/coffee_highlight_tea_cup_icon_153758 11.png"
import {Link} from "react-router-dom";

const Card = ({product}) => {
    return (
        <Link to={`/tea/${product.id}`} className="card">
            {/*<p>{product.id}</p>*/}
            {/*<p>{product.description}</p>*/}
            {/*<p>{product.categoryId}</p>*/}
            {/*<p>{product.amount}</p>*/}
            <div className="title">
                <img src={deff} alt="img"/>
                {/*<p>{product.imagePath}</p>*/}
                <p>{product.name}</p>
            </div>
            <div className="price">
                <div className="sell">
                    <p>{product.price} руб</p>/<span>100гр</span>
                </div>
                <button>Купить</button>
            </div>
            {/*product.isAvailable ? <p>True</p> : <p>False</p>*/}
        </Link>
    )
}
export default Card