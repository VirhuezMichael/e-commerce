import { memo } from "react";
import Item from "./Item";
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #F8F3E6;
  padding: 50px 0;
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
