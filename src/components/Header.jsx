import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = React.memo(() => {
  return (
    <MainHeader>
      <NavLink to="/" aria-label="Home">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
});

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: block;
    height: auto;
    max-width: 30%;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    margin-right: auto; /* Aligns logo to the left */
  }

  .logo:hover {
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    
    .logo {
      max-width: 50%;
    }
  }
`;

export default Header;
