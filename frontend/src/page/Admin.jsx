import {useEffect, useState} from "react";
import Chart from "../componets/admin/Chart";
import ProductList from "../componets/admin/ProductList";
import {AllTea} from "../API/AllTea";


const Admin = () => {
    const [products, setProducts] = useState(0)
    const FetchTea = async () => {
        try {
            const res = await AllTea()
            const num = res.rows.map(item => item.amount)
            const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

            setProducts(sum)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        FetchTea()
    }, []);
    return (
        <div className="wrapper">
            <div className="col">
                Количество товаров на складе: {products}
            </div>
            <h1>Список товаров</h1>
            <ProductList/>

            <h1>Статистика</h1>
            <Chart></Chart>
        </div>
    )
}

export default Admin