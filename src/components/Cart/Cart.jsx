import { useCartContext } from "../../context/CartContext";
import styled from "styled-components";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from "./Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartTitleContainer = styled.div`
  display: row;
  text-align: center;
  margin-bottom: 25px;
`;
const CardItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 50px;
  margin-bottom: 5px;
  background-color: white;
`;
const CardsItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  margin-right: 50px;
`;
const CartItemImage = styled.img`
  width: 100px;
  height: 90px;
`;
const CartItemInfo = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  width: 500px;
  justify-content: space-between;
`;
const Info = styled.p`
  padding-left: 15px;
  padding-right: 15px;
`;
const DeleteButton = styled.button`
  border: none;
  border-radius: 11px;
  background-color: white;
`;
const DeleteProduct = styled.img`
  width: 35px;
  height: 45px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 180px;
  margin: 0px 10px 10px 10px;
`;
const CartContainer = styled.div`
  background-color: #f8f3e6;
`;
const EmptyCart = styled.p`
  text-align: center;
  margin-bottom: 0px;
`;

const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const {
    cartList,
    cleanCart,
    deleteItem,
    calculatePrice,
    dataForm,
    setDataForm,
  } = useCartContext();

  const removeFromCart = (itemId) => deleteItem(itemId);
  //generar orden de compra
  const generateOrder = (event) => {
    if (dataForm.mail !== dataForm.validateMail || dataForm.nombre === "" || dataForm.mail === "" || dataForm.phone === "" ) {
      
      window.alert("Oh! Algo no está bien\nRevise la información\n(Asegúrese que todos los campos estén completos y que los emails coinciden)");
      
    } else {
      event.preventDefault();

      const order = {};
      order.buyer = dataForm;
      order.total = calculatePrice();
      order.products = cartList.map(({ id, name, price }) => ({
        id,
        name,
        price,
      }));

      //insertar orden de compra en Firebase
      const db = getFirestore();
      const queryCollection = collection(db, "Orders");
      addDoc(queryCollection, order)
        // .then((resp) => console.log(resp))
        .then((docRef) => {setOrderId(docRef.id)})
        .catch((error) => console.log(error))
        .finally(() => {
          cleanCart();
          setDataForm({
            name: "",
            phone: "",
            mail: "",
            validateMail: "",
          });
        });
        setIsVisible(!isVisible);
    }
  };

  return (
    <CartContainer>
      <CartTitleContainer>
        <h2>Carrito de compras</h2>
      </CartTitleContainer>
      <CardsItemsContainer>
        {cartList.length === 0 ? (
          <EmptyCart>No hay productos en el carrito</EmptyCart>
        ) : (
          cartList.map((prodCart) => (
            <label key={prodCart.id}>
              <CardItemContainer>
                <CartItemImage src={prodCart.image} />
                <CartItemInfo>
                  <Info>Nombre: {prodCart.name}</Info>
                  <Info>Cantidad: {prodCart.qty}</Info>
                  <Info>Precio/unidad: ${prodCart.price}</Info>
                </CartItemInfo>
                <div>
                  <DeleteButton onClick={() => removeFromCart(prodCart.id)}>
                    <DeleteProduct
                      src="/assets/remove.jpg"
                      alt="#remove-img"
                    />
                  </DeleteButton>
                </div>
              </CardItemContainer>
            </label>
          ))
        )}
      </CardsItemsContainer>
      {cartList.length === 0 ? (
        <>
        <EmptyCart>Por favor, seleccione productos para su carrito</EmptyCart>
        <ButtonContainer>
        <Link to="/">
        <Button>Seguir Navegando</Button>
        </Link>
        </ButtonContainer>
        </>
      ) : (
        <>
          <Form />
          <ButtonContainer>
            <Button onClick={generateOrder}>Orden de Compra</Button>
            <Button onClick={cleanCart}>Vaciar Carrito</Button>
          </ButtonContainer>
        </>
      )}
      {isVisible && <EmptyCart>El NÚMERO de su orden es: {orderId}</EmptyCart>}
    </CartContainer>
  );
};

export default Cart;
