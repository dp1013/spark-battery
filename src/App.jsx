import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";
import CartPage from "./CartPage";
import Error from "./Error";
import ProductListPage from "./ProductListPage";
import ProductDetailsPage from "./ProductDetailsPage";
import Dropdown from "./Dropdown";
import Brands from "./Brands";

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgb(24 24 29)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84, 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: { mobile: "768px", tab: "998px" },
};

// Define your array of products outside the component to avoid redefining it on each render
const initialProducts = [
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
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalPrice(total);
    setTotalItems(itemsCount);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <GoToTop />
        <Header totalItems={totalItems} />
        <Routes>
          <Route path="/" element={<Home products={initialProducts} onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/brand" element={<Brands />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} totalPrice={totalPrice} handleRemove={handleRemove} handleQuantityChange={handleQuantityChange} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductListPage products={initialProducts} onAddToCart={handleAddToCart} />} />
          <Route path="/product/:productId" element={<ProductDetailsPage products={initialProducts} onAddToCart={handleAddToCart} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
