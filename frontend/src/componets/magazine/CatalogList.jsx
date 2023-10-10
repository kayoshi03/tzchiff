import {useEffect, useState} from "react";
import {AllTea} from "../../API/AllTea";
import Card from "./Card";

const CatalogList = () => {
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
                <Card key={product.id} product={product}></Card>
            ))}

        </div>
    )
}
export default CatalogList