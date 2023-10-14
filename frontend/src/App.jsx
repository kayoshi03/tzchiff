import {Route, Routes} from "react-router";
import Layout from "./page/Layout";
import Admin from "./page/Admin";
import Cashier from "./page/Cashier";
import HomePage from "./page/HomePage";
import CardPage from "./page/CardPage";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>} ></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/cassa" element={<Cashier/>}></Route>
           <Route path="/tea/:id" element={<CardPage/>}/>
       </Route>
     </Routes>
    </>
  );
}

export default App;
