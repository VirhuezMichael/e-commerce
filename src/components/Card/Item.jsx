import { memo } from "react";
// import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer= styled.div`
  width: auto;
  margin: 10px;
  border-radius: 4px;
  text-align: center;

  @media (max-width: 768px) {
    width: auto;
  }

  &:hover {
    box-shadow:  inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 1px rgb(255,255,255),
             0.3em 0.3em 0.8em rgba(0,0,0,0.3);
    
  }
`;

const ImageContainer = styled.div`
  width: auto;
  height: auto;
`

const CardInfoContainer = styled.div`
 background-color: #fefefe;
 width: 250px;
`
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardPrice = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #0f0f0f;
`;

const CardName = styled.h2`
  font-size: 18px;
  color:#fefefe;
  ${CardContainer}:hover & {
    color: #757575;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color:#fefefe;
  margin-bottom: 0;
  padding-bottom: 10px;
  ${CardContainer}:hover & {
    color: #757575;
  }
`;

// const BuyButton = styled.button`
//   background-color: #03A9F4;
//   color: #fff;
//   font-size: 16px;
//   margin-bottom: 5px;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   border: 4px solid transparent;

//   &:hover {
//     border-color: #303F9F;
//   }
// `;

// Este componente renderiza cada uno de los productos en una Card
const CardItem = memo(({ producto }) => {
  const navigate = useNavigate();

  const redirectToDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <CardContainer onClick={() => redirectToDetail(producto.id)}>
      <CardInfoContainer>
        <ImageContainer>
          <CardImage src={producto.image} />
        </ImageContainer>
          <CardPrice>${producto.price}</CardPrice>
          <CardName>{producto.name}</CardName>
          <CardDescription>Descripción: {producto.description}</CardDescription>
          {/* <Link to={`/detail/${producto.id}`}>
            <BuyButton>
              Detalle del Producto
            </BuyButton>
          </Link> */}
      </CardInfoContainer>
    </CardContainer>
  );
});

export default CardItem;
