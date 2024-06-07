import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// Styled components
const ProductPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

const ToggleMenuButton = styled.button`
  background-color: rgb(98, 84, 243);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: rgb(78, 64, 203);
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: rgb(98, 84, 243);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

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

// Sample product data
const products = [
  {
    id: 1,
    name: "TZ4 AMARON",
    description: "Description for product 1",
    price: 800,
    image: "/images/battery.png",
  },
  {
    id: 2,
    name: "TZ4. EXIDE",
    description: "Description for product 2",
    price: 850,
    image: "/images/T4ZEE.png",
  },
  {
    id: 3,
    name: "TZ5 AMARON",
    description: "Description for product 3",
    price: 950,
    image: "/images/battery.png",
  },
  {
    id: 4,
    name: "TZ5 EXIDE XPLORE",
    description: "Description for product 4",
    price: 1100,
    image: "/images/TZ5.jpg",
  },
  {
    id: 5,
    name: "38b20L. AMARON",
    description: "Description for product 5",
    price: 2700,
    image: "/images/38B20L.png",
  },
  {
    id: 6,
    name: "38B20L. Excide",
    description: "Description for product 6",
    price: 1300,
    image: "/images/38B20L.png",
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description for product 7",
    price: 1400,
    image: "/images/battery.png",
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description for product 8",
    price: 1500,
    image: "/images/battery.png",
  },
  {
    id: 9,
    name: "Product 9",
    description: "Description for product 9",
    price: 1600,
    image: "/images/battery.png",
  },
  // Add other product data here
];

// ProductListPage component
const ProductListPage = ({ onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Filter change handler
  const handleFilterChange = (e) => {
    const filter = e.target.value;
    if (filter === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.price <= parseInt(filter));
      setFilteredProducts(filtered);
    }
  };

  // Add to Cart click handler
  const handleAddToCartClick = (product) => {
    onAddToCart(product);
    navigate(`/cart`);
  };

  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <ProductPageContainer>
      <Header>
        <SearchInput 
          type="text" 
          placeholder="Search..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>🔍</SearchButton>
        <ToggleMenuButton onClick={() => setShowMenu(true)}>
          Filter
        </ToggleMenuButton>
      </Header>
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
