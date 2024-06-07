import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Styled components
const ProductDetailsContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const ProductDetailsCard = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  text-align: left;
`;

const ProductImage = styled.img`
  max-width: 50%; /* Adjusted image size */
  height: auto;
  object-fit: cover;
  margin-right: 40px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%; /* Added width to the product info section */

  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
    font-weight: bold;
  }

  p {
    margin-bottom: 10px;
    color: #666;
  }

  button {
    background-color: rgb(98, 84, 243);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 10px;

    &:hover {
      background-color: rgb(78, 64, 203);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ProductDetailsPage = ({ products, onAddToCart }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  const handleBuyNowClick = () => {
    onAddToCart(product);
    // Navigate to checkout or payment page here
  };

  return (
    <ProductDetailsContainer>
      <ProductDetailsCard>
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo>
          <h2>{product.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, nunc sit amet cursus suscipit, urna elit volutpat turpis,
            vitae sollicitudin dolor risus at magna. Nullam posuere leo et eros
            sodales, id pellentesque risus ultricies. Fusce et sapien ut odio
            tincidunt vestibulum. Praesent aliquet arcu vel magna volutpat, in
            ullamcorper nisi vehicula.
          </p>
          <p>Rs {product.price}</p>
          <ButtonGroup>
            <button onClick={handleAddToCartClick}>Add to Cart</button>
            <button onClick={handleBuyNowClick}>Buy Now</button>
          </ButtonGroup>
        </ProductInfo>
      </ProductDetailsCard>
    </ProductDetailsContainer>
  );
};

export default ProductDetailsPage;
