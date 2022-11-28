import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import AddEditProductPage from "./pages/AddEditProductPage/AddEditProductPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import GameDetailPage from "./pages/GameDetailsPage/GameDetailsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
function App() {
  return (
    <>
   <BrowserRouter>
   <GlobalStyle/>
   <Routes>
   <Route path="/" element={<CatalogPage/>}/>
   <Route path="/login" element={<LoginPage/>}/>
   <Route path="/product/:action" element={<AddEditProductPage/>}/>
   <Route path="/product/:action/:id" element={<AddEditProductPage/>}/>
   <Route path="/game/:id" element={<GameDetailPage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
