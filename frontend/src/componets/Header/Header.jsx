import  logo from  "../../assets/logo.svg"
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import Search from "./Search";
const Header = () => {
    const location = useLocation()
    return (
        <header>
            <div className="logotype">
                <img alt="logo" src={logo}/>
                <Link to="/"><h1>Чайкиф</h1></Link>
            </div>
            { location.pathname === "/admin"|| location.pathname === "/cassa" ? <>{location.pathname === "/admin" ? <div className="page">Admin</div> : <div className="page">Кассир</div>}</> : <Search/>}
            { location.pathname === "/admin"|| location.pathname === "/cassa" ? <>{location.pathname === "/admin" ? <div className="z"></div> : <div className="z"></div>}</> : <div>Info</div>}
        </header>
    )
}
export default Header