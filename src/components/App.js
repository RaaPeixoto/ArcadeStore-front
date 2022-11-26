import { BrowserRouter, Routes, Route } from "react-router-dom"
import {GlobalStyle} from "../assets/GlobalStyle";
function App() {
  return (
    <>
   <BrowserRouter>
   <GlobalStyle/>
   <Routes>
   {/* <Route path="/" element={<CatalogPage/>}/> */}
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
