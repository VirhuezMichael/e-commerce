import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const GreetingContainer = styled.div`
  display: row;
  text-align: center;
  background-color: #303F9F;
  color:#FFFFFF;
  padding-bottom: 10px;
`
const SpinnerContainer = styled.div`
  text-align: center;
  margin-top:150px;
`
// Este componente hace el llamado a las APIs y almacena los estados
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();
  
  useEffect(() => {
    if (idCategory) {
      const db = getFirestore();
      const queryCollection = collection(db, "Productos");

      const queryFilter = query(
        queryCollection,
        where("category", "==", idCategory)
      );

      getDocs(queryFilter)
        .then((respCollection) =>
          setProducts(
            respCollection.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "Productos");
      getDocs(queryCollection)
        .then((respCollection) =>
          setProducts(
            respCollection.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

    }
  }, [idCategory]);

  return (
    <div>
    <GreetingContainer>
      <h2>{greeting}</h2>
    </GreetingContainer>
      {loading ? (
        <SpinnerContainer>
        <LoadingSpinner />
        </SpinnerContainer>
      ) : (
        // Paso el array de products como props
        <ItemList products={products} />
      )}
   
    </div>
  );
};

export default ItemListContainer;
