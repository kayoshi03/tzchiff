import {Route, Routes} from "react-router";
import Layout from "./page/Layout";
import Admin from "./page/Admin";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Layout/>}>
            <Route ></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/cassa" element={<Admin/>}></Route>
       </Route>
     </Routes>
    </>
  );
}

export default App;
