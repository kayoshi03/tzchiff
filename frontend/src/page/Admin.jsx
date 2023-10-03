import {useEffect} from "react";
import Chart from "../componets/admin/Chart";

// import ProductList from "../componets/admin/ProductList";

const Admin = () => {
    useEffect(() => {

    }, []);
    return (
        <div className="wrapper">
            <h1>Список товаров</h1>
            {/*<ProductList/>*/}
            <h1>Статистика</h1>
            <Chart></Chart>

        </div>
    )
}

export default Admin