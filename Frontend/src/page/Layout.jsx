import {Outlet} from "react-router";

const Layout = () => {
    return(
        <>
            <header>HEADER</header>
            <main>
                <Outlet/>
            </main>
            <footer>FOOTER</footer>
        </>
    )
}
export default Layout