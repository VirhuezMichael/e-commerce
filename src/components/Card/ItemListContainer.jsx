import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../utils/gFetch";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import LoadingSpinner from "./LoadingSpinner";

// Este componente hace el llamado a las APIs y almacena los estados
const ItemListContainer = ({ greeting }) => {
  // then, catch y finally son metodos de mi Promise
  //  .then captura res y rej
  //  .catch captura rej, por eso en el metodo then no se utiliza rej
  //  .finally se ejecuta en ultima instacia de mi Promise
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();
  console.log(idCategory);
  useEffect(() => {
    if (idCategory) {
      gFetch()
        .then((resp) =>
          setProducts(resp.filter((product) => product.category === idCategory))
        )
        .catch((rej) => console.log(rej))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((resp) => setProducts(resp))
        .catch((rej) => console.log(rej))
        .finally(() => setLoading(false));
    }
  }, [idCategory]);

  //console.log(products);

  return (
    <div className="body-container">
      <h2>{greeting}</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        // Paso el array de products como props
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
