import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Update the carLogos array to include only image URLs
const carLogos = [
  "images/kia.png",
  "images/Hyundai.png",
  "images/Audi.png",
  "images/toyota.png",
  "images/Ford.png",
  "images/Fiat.png",
  "images/Merc.png",
  "images/nissan.png",
  "images/Jeep.png",
  "images/suzuki.png",
  "images/Skoda.png",
  "images/BMW.png",
  "images/Mahindra.png",
  "images/Renault.png",
  "images/w.png",
  "images/Chevrolet.png" 
];

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const CarGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;  /* Increase gap for better spacing */
`;

const CarLogo = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100px; /* Reduce the size of the image */
  height: auto;
  display: block;
  margin: 0 auto;
`;

function CarGrid() {
  const navigate = useNavigate();

  const handleLogoClick = (index) => {
    // Redirect to the products page for the specific car manufacturer
    navigate(`/service`);
  };

  return (
    <CarGridContainer>
      {carLogos.map((src, index) => (
        <CarLogo key={index} onClick={() => handleLogoClick(index)}>
          <LogoImage src={src} alt={`Car logo ${index}`} />
        </CarLogo>
      ))}
    </CarGridContainer>
  );
}

function App() {
  return (
    <AppContainer>
      <Heading>Shop By Manufacturers</Heading>
      <CarGrid />
    </AppContainer>
  );
}

export default App;
