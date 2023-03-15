import { memo } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const CardContainer= styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #3F51B5;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const CardInfoContainer = styled.div`
 background-color: #C5CAE9;
 width: 286px;
`
const CardImage = styled.img`
  width: 286px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const CardName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #212121;
`;

const CardText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color:#757575;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color:#757575;
`;

const BuyButton = styled.button`
  background-color: #03A9F4;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 4px solid transparent;

  &:hover {
    border-color: #303F9F;
  }
`;

// Este componente renderiza cada uno de los productos en una Card
const CardItem = memo(({ producto }) => {
  return (
    <CardContainer>
      <CardInfoContainer>
        <CardImage src={producto.image} />
          <CardName>{producto.name}</CardName>
          <CardDescription>Descripción: {producto.description}</CardDescription>
          <CardText>Stock: {producto.stock}</CardText>
          <Link to={`/detail/${producto.id}`}>
            <BuyButton>
              Detalle del Producto
            </BuyButton>
          </Link>
      </CardInfoContainer>
    </CardContainer>
  );
});

export default CardItem;
