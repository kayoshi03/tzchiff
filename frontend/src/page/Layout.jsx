import {Outlet} from "react-router";
import Header from "../componets/Header/Header";

const Layout = () => {
    return(
        <>
            <Header/>
            <main>
                <Outlet/>

            </main>
            <footer>FOOTER</footer>
        </>
    )
}
export default Layout