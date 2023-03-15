import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import LoadingSpinner from "../Card/LoadingSpinner";
import ItemCount from "../ItemCount/ItemCount";
import CardDetail from "./CardDetail";
import styled from "styled-components";

const ProductDetailBuyButton = styled.button`
  background-color: green;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #00ff00;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`
const SpinnerContainer = styled.div`
  text-align: center;
  margin-top: 150px;
  margin-bottom: 150px;
`
const DetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);
  const { addToCart } = useCartContext();
  const { idProduct } = useParams();
  const [isCount, setIsCount] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "Productos", idProduct);
    getDoc(queryDoc)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  //funcion de btn "Agregar al Carrito"
  function onAdd(qty = 0) {
    addToCart({ ...product, qty });
    setIsCount(false);
    console.log(isCount);
  }

  return (
    <div>
      {loading ? <SpinnerContainer><LoadingSpinner /></SpinnerContainer> : <CardDetail product={product} />}
      {isCount ? (
        <ItemCount initial={1} onAdd={onAdd} />
      ) : (
        <ButtonsContainer>
          <Link to="/cart">
            <ProductDetailBuyButton>
            Ver Carrito
            </ProductDetailBuyButton>
          </Link>
          <Link to="/">
          <ProductDetailBuyButton>
            Seguir Comprando
            </ProductDetailBuyButton>
          </Link>
        </ButtonsContainer>
      )}
    </div>
  );
};

export default DetailContainer;
