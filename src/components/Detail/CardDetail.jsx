import styled from "styled-components";

const DetailContainer = styled.div`
display: flex;
justify-content: flex-start;
padding-top: 20px;
margin-left: 2rem;
margin-right: 2rem;
`;

const DescriptionContainer = styled.div`
display: flex;
justify-content: flex-start;


padding-left: 1rem;
border: .2px solid;
border-color: #c8c8c8;
border-radius: 12px;
margin: 2px 2rem 20px 2rem;
`;

const ProductDetailImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductDetailImage = styled.img`
  max-width: 100%;
  margin-right: 2px;
  border-radius: 12px;
`;

const ProductDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fefefe;
  border: 0.1px solid;
  border-radius: 12px;
  border-color: #c8c8c8;
  padding: 50px 40px 40px 50px;
  flex: 1;
`;

const ProductDetailTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDetailPrice = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDetailStock = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductDetailDescription = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const CardDetail = ({ product }) => {
  return (
    <>
    <DetailContainer>
    <ProductDetailImageContainer>
      <ProductDetailImage
        className="img"
        width={680}
        height={550}
        alt="171x180"
        src={product.image}
      />
      </ProductDetailImageContainer>
      <ProductDetailInfoContainer>
        - Detalle de Producto -
        <ProductDetailTitle>{product.name}</ProductDetailTitle>
        <ProductDetailPrice>${product.price}</ProductDetailPrice>
        <ProductDetailStock>Unidades Disponibles: {product.stock}</ProductDetailStock>
      </ProductDetailInfoContainer>
      </DetailContainer>
      <DescriptionContainer>
      <ProductDetailDescription>{product.description}</ProductDetailDescription>
      </DescriptionContainer>
      </>
  );
};

export default CardDetail;
