import Product from "./Product";
import {useEffect, useState} from "react";
import {AllTea} from "../../API/AllTea";

const ProductList = () => {
    const [products, setProducts] = useState([])
    const FetchTea = async () => {
        try {
            const res = await AllTea()
            setProducts(res.rows)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        FetchTea()
    }, [])
    return (
        <div className="cardList">
            {products.map((product) => (
                <Product key={product.id} product={product}></Product>
            ))}

        </div>
    )
}
export default ProductList