import styled from "styled-components";

const DetailContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 20px;
`;

const DescriptionContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding-top: 20px;
border: 2px solid;
border-color: black;
margin: 20px 130px 20px 130px;
`;

const ProductDetailImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductDetailImage = styled.img`
  max-width: 100%;
  margin-right: 20px;
`;

const ProductDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F7F7F7;
  padding: 50px 40px 40px 50px;
`;

const ProductDetailTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDetailPrice = styled.p`
  font-size: 18px;
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
        width={400}
        height={400}
        alt="171x180"
        src={product.image}
      />
      </ProductDetailImageContainer>
      <ProductDetailInfoContainer>
        - Detalle de Producto -
        <ProductDetailTitle>{product.name}</ProductDetailTitle>
        <ProductDetailPrice>Precio Unitario: {product.price}</ProductDetailPrice>
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
