import deff from "./../../assets/coffee_highlight_tea_cup_icon_153758 11.png"

const Product = ({product}) => {
    return (
        <div className="card">
            {/*<p>{product.id}</p>*/}
            {/*<p>{product.description}</p>*/}
            {/*<p>{product.categoryId}</p>*/}
            {/*<p>{product.amount}</p>*/}
            <div className="title">
                <img src={deff} alt="dasd"/>
                {/*<p>{product.imagePath}</p>*/}
                <p>{product.name}</p>
            </div>
            <div className="price">
                <p>{product.price} руб</p>/<span>100гр</span>
                <button>Купить</button>
            </div>





            {/*product.isAvailable ? <p>True</p> : <p>False</p>*/}

        </div>
    )
}

export default Product