import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import LoginPage from "./pages/LoginPage/LoginPage";
function App() {
  return (
    <>
   <BrowserRouter>
   <GlobalStyle/>
   <Routes>
   <Route path="/" element={<CatalogPage/>}/>
   <Route path="/login" element={<LoginPage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
