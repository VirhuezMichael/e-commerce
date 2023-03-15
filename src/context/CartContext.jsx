import { useState, useContext } from "react";
import { createContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

const [dataForm, setDataForm] = useState({
     name: "",
     phone: "",
     mail: "",
     validateMail: ""
     });

// Función para agregar un producto al carrito
const addToCart = (product) => {
  // Verificar si el producto ya está en el carrito
  const existingItem = cartList.find((item) => item.id === product.id);
  if (existingItem) {
    // Si el producto ya está en el carrito, actualizar su cantidad
    const updatedCartList = cartList.map((item) => {
      if (item.id === product.id) {
        return {...item, qty: item.qty + product.qty};
      } else {
        return item;
      }});
    setCartList(updatedCartList);
  } else {
    // Si el producto no está en el carrito, agregarlo con una cantidad de product
    const newCartList = {...product, qty: product.qty};
    setCartList([...cartList, newCartList]);
  }};



  const calculatePrice = () => {
    let total = 0;

    cartList.forEach((product) => {
      const price = parseFloat(product.price);
      const qty = parseFloat(product.qty);
  
      if (!isNaN(price) && !isNaN(qty)) {
        total += price * qty;
      }
    });
  
    return total;
  };

  const qtyTotal = () => cartList.reduce((cantidad, currentValue) => (cantidad += currentValue.qty),0);
  const deleteItem = (itemId) => setCartList(cartList.filter((prod) => prod.id !== itemId));
  const cleanCart = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        dataForm,
        setDataForm,
        cartList,
        addToCart,
        cleanCart,
        qtyTotal,
        deleteItem,
        calculatePrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
