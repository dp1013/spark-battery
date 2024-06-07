import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const ProductPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleMenuButton = styled.button`
  background-color: rgb(98, 84, 243);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: rgb(78, 64, 203);
  }
`;

const PopUpMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: darkred;
  }
`;

const Filters = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  margin-bottom: 10px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  text-align: center;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
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

    &:hover {
      background-color: rgb(78, 64, 203);
    }
  }
`;

const ProductListPage = ({ products, onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Filter change handler
  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "price") {
      if (value === "all") {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) => product.price <= parseInt(value));
        setFilteredProducts(filtered);
      }
    } else if (name === "category") {
      // Handle category filter (example)
      // Implement your category filter logic here
      // For simplicity, I'll assume categories are filtered separately
      console.log("Category filter selected:", value);
    }
  };

  const handleAddToCartClick = (product) => {
    onAddToCart(product);
    navigate("/cart");
  };

  return (
    <ProductPageContainer>
      <ToggleMenuButton onClick={() => setShowMenu(true)}>
        Filter
      </ToggleMenuButton>
      <PopUpMenu show={showMenu}>
        <CloseButton onClick={() => setShowMenu(false)}>Close</CloseButton>
        <Filters>
          <FilterTitle>Price</FilterTitle>
          <div>
            <input
              type="radio"
              name="price"
              value="all"
              onChange={handleFilterChange}
            />{" "}
            All
          </div>
          <div>
            <input
              type="radio"
              name="price"
              value="1000"
              onChange={handleFilterChange}
            />{" "}
            Under Rs 1000
          </div>
          <div>
            <input
              type="radio"
              name="price"
              value="900"
              onChange={handleFilterChange}
            />{" "}
            Under Rs 900
          </div>
        </Filters>
        <Filters>
          <FilterTitle>Category</FilterTitle>
          <div>
            <input
              type="checkbox"
              name="category"
              value="category1"
              onChange={handleFilterChange}
            />{" "}
            Category 1
          </div>
          <div>
            <input
              type="checkbox"
              name="category"
              value="category2"
              onChange={handleFilterChange}
            />{" "}
            Category 2
          </div>
        </Filters>
      </PopUpMenu>
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Rs {product.price}</p>
            </Link>
            <button onClick={() => handleAddToCartClick(product)}>
              Add to Cart
            </button>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductPageContainer>
  );
};

export default ProductListPage;
