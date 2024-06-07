import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav>
      <div className={`menuIcon ${openMenu ? "active" : ""}`}>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/service">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="login-button">
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/login">
              Login
            </NavLink>
          </li>
          <li className="cart-button">
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/cart">
              <FiShoppingCart />
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setOpenMenu(true)} />
          <CgCloseR name="close-outline" className="close-outline mobile-nav-icon" onClick={() => setOpenMenu(false)} />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }

    .close-outline {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
    }

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      transform: translateX(100%);
      visibility: hidden;
      opacity: 0;
      transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;

      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }
        }
      }
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }

    .active .mobile-nav-icon[name="menu-outline"] {
      display: none;
    }

    .active .mobile-nav-icon[name="close-outline"] {
      display: inline-block;
    }
  }
`;

export default Navbar;
