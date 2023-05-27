import ItemListContainer from "./components/Card/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailContainer from "./components/Detail/DetailContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a nuestra tienda online!" />}
          />
          <Route path="/detail/:idProduct" element={<DetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found-404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found-404" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
