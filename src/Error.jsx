import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="/images/error.svg" alt="Error" className="error-image" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .error-image {
    max-width: 100%;
    height: auto;
  }

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

export default Error;
