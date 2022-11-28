import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import AddEditProductPage from "./pages/AddEditProductPage/AddEditProductPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import GameDetailPage from "./pages/GameDetailsPage/GameDetailsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import UserGamesPage from "./pages/UserGamesPage.js/UserGamesPage";
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
   <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
   <Route path="/usergames" element={<UserGamesPage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
