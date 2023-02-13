import ItemListContainer from "./components/Card/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailContainer from "./components/Detail/DetailContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemCount from "./components/ItemCount/ItemCount";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido" />} />
        <Route path="/detail/:idProduct" element={<DetailContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/not-found-404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found-404"/>}/>
      </Routes>
      <ItemCount/>
    </BrowserRouter>
  );
}

export default App;
