import { memo } from "react";
import Item from "./Item";
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0;
 background-color: #f3f3f3;
  transition: background-color 0.3s ease;
`;

// Este componente genera el listado de productos que recibe de products
const ItemList = memo(({ products }) => {
  return (
    <ProductsContainer>
      {products.map((producto) => (
        <Item producto={producto} key={producto.id}/>
      ))}
    </ProductsContainer>
  );
});

export default ItemList;
