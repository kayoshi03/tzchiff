import Product from "./Product";
import {useEffect, useState} from "react";
import {AllTea} from "../../API/AllTea";
import AddTea from "./AddTea";
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
        <>
            <div className="cardList">
            {products.map((product) => (
                <Product key={product.id} product={product} reset={FetchTea}></Product>
            ))}
            </div>
            <h1>Добавить товар</h1>
            <AddTea reset={FetchTea}></AddTea>
        </>

    )
}
export default ProductList