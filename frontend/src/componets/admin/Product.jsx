import deff from "./../../assets/coffee_highlight_tea_cup_icon_153758 11.png"
import API from "../../API/API";

const Product = ({product, reset}) => {
    const Delete = () => {
        API.delete(`/tea/${product.id}`)
        reset()
    }
    const url = `http://46.8.210.113:5000/${product.imagePath}`
    return (
        <div className="card">
            {/*<p>{product.id}</p>*/}
            {/*<p>{product.description}</p>*/}
            {/*<p>{product.categoryId}</p>*/}
            {/*<p>{product.amount}</p>*/}
            <div className="title">
                {product.imagePath === null ? <img src={deff} />:<img src={url} alt={url}/>}
                {/*<p>{product.imagePath}</p>*/}
                <p>{product.name}</p>
            </div>
            <div className="price">
                <div className="sell">
                    <p>{product.price} руб</p>/<span>100гр</span>
                </div>

                <button className="delete" onClick={Delete}>Удалить</button>
            </div>





            {/*product.isAvailable ? <p>True</p> : <p>False</p>*/}

        </div>
    )
}

export default Product