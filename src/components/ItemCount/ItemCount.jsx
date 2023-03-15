import { useState } from "react";
import styled from "styled-components";

const AddCartButton = styled.button`
  background-color: #312B2A;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 4px solid transparent;

  &:hover {
    background-color: #312B2A;
    border-color: #f72585;
    color: #fff;
  }
`;

const CountButton = styled.button`
  background-color: #504B4A;
  cursor: pointer;
  color: #F5EEEC;
  width: 50px;

  &:hover {
    background-color: #312B2A;
    border-color: #f72585;
    color: #fff;
  }
`
const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`
const Qty = styled.span`
  margin-left: 20px;
  margin-right: 20px;
`

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    //initial = 1; //El número inicial de un contador, por sentido común tiene que ser mayor o igual a 1
  //stock = 7; //Limita el count, pensado en el stock de un producto

  //hook de estado
  const [qty, setQty] = useState(initial);

  //esta función recibe por parámetro un número que se sumará al valor inicial
  //del estado qty. De esta manera podremos sumar y restar con una misma función
  const addProduct = (num) => {
    setQty(qty + num);
  };
    
    return (
        <div className="count-container">
          <CountContainer>
            <CountButton
              onClick={() => addProduct(-1)}
              //disabled es una propiedad de los inputs y buttons en html, por defecto disabled tiene un valor booleano en true, sin embargo podemos aprovechar que en jsx podemos mezclar html y javascript para aplicar una operación lógica de comparación que devolverá un true si es que el valor inicial y la cantidad son la misma
              //Esto hará que no podamos seguir ejecutando la función para restar
              disabled={qty === initial}
            >
              -
            </CountButton>
            <Qty>{qty}</Qty>
            <CountButton
              onClick={() => addProduct(+1)}
              //en este otro botón, aplico una operación lógica de comparación que devolverá true cuando la cantidad sea igual al stock, esto evitará que pueda seguir sumando. Esto es muy útil porque reduzco el costo computacional ya que evito directamente que se ejecute la función addProduct.
              //disabled={qty === stock}
            >
              +
            </CountButton>
          </CountContainer>
          <CountContainer>
          <AddCartButton
            onClick={() => {
              onAdd(qty);
            }}
            disabled={stock === 0 ? true : null}
          >
            Añadir al Carrito
          </AddCartButton>
          </CountContainer>
        </div>
      );
}

export default ItemCount;