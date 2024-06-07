import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalPrice(total);
    setTotalItems(itemsCount);
  }, [cartItems]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };

  return (
    <CartContainer>
      <CartHeader>
        <h1>Your Cart</h1>
      </CartHeader>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
      ) : (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="product-image"
              />
              <ProductDetails>
                <h2>{item.name}</h2>
                <p>Price: Rs {(item.price * item.quantity).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <QuantityButtons>
                  <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </QuantityButtons>
              </ProductDetails>
              <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
        </CartItems>
      )}
      {cartItems.length > 0 && (
        <>
          <TotalPrice>Total Price: Rs {totalPrice.toFixed(2)}</TotalPrice>
          <CheckoutButton>Checkout</CheckoutButton>
        </>
      )}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #666;
`;

const CartItems = styled.div`
  margin-top: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .product-image {
    width: 100px;
    margin-right: 20px;
  }
`;

const ProductDetails = styled.div`
  flex-grow: 1;
`;

const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    margin: 0 5px;

    &:disabled {
      background-color: #ccc;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: right;
`;

const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btn}; /* Primary color */
  color: #fff;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  float: right;
  margin-top: 20px;

  &:hover {
    background-color: #5a56c2;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default CartPage;
