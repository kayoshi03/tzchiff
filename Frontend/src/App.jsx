import {Route, Routes} from "react-router";
import Layout from "./page/Layout";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Layout/>}>
         <Route></Route>
         <Route></Route>
       </Route>
     </Routes>
    </>
  );
}

export default App;
