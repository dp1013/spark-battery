import React, { useState } from "react";
import styled from "styled-components";

const HeroSection = () => {
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [batteryBrand, setBatteryBrand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(`Car Make: ${carMake}, Car Model: ${carModel}, Battery Brand: ${batteryBrand}`);
  };

  return (
    <Wrapper>
      <div className="section-hero-content">
        <div className="section-hero-image">
          <picture>
            <img src="/images/car.png" alt="Car Battery" className="hero-img" />
          </picture>
        </div>

        <div className="section-hero-data">
          <h1 className="hero-heading">Spark Battery</h1>
          <p className="hero-para">
            Since 2000, we've been your trusted source for top-quality batteries and exceptional service. Visit us today for reliable replacements and upgrades for all your battery needs!
          </p>
        </div>
      </div>

      <div className="dropdown-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="car-make">Car Make</label>
            <select
              id="car-make"
              value={carMake}
              onChange={(e) => setCarMake(e.target.value)}
            >
              <option value="">Select Manufacturer</option>
              <option value="kia">KIA</option>
              <option value="mg-hector">MG Hector</option>
              <option value="maruti-suzuki">Maruti Suzuki</option>
              <option value="hyundai">Hyundai</option>
              <option value="honda">Honda</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="tata-motors">Tata Motors</option>
              <option value="skoda">Skoda</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="ford">Ford</option>
              <option value="fiat">Fiat</option>
              <option value="toyota">Toyota</option>
              <option value="mahindra">Mahindra</option>
              <option value="nissan">Nissan</option>
              <option value="renault">Renault</option>
              <option value="audi">Audi</option>
              <option value="bmw">BMW</option>
              <option value="mercedes-benz">Mercedes-Benz</option>
              <option value="porsche">Porsche</option>
              <option value="volvo">Volvo</option>
              <option value="land-rover">Land Rover</option>
              <option value="jeep">Jeep</option>
              <option value="mini">Mini</option>
              <option value="hindustan-motors">Hindustan Motors</option>
              <option value="premier">Premier</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="daewoo">Daewoo</option>
              <option value="isuzu-motors">Isuzu Motors</option>
              <option value="lexus">Lexus</option>
              <option value="icml">ICML</option>
              <option value="maserati">Maserati</option>
              <option value="force-motors">Force Motors</option>
              <option value="lamborghini">Lamborghini</option>
              <option value="bentley">Bentley</option>
              <option value="aston-martin">Aston Martin</option>
              <option value="isuzu">Isuzu</option>
              {/* Add more car manufacturers here if needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="car-model">Car Model</label>
            <select
              id="car-model"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
            >
              <option value="">Select Model</option>
              <option value="corolla">Corolla</option>
              <option value="camry">Camry</option>
              <option value="civic">Civic</option>
              <option value="accord">Accord</option>
              <option value="mustang">Mustang</option>
              <option value="focus">Focus</option>
              {/* Add more car models here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="battery-brand">Battery Brand</label>
            <select
              id="battery-brand"
              value={batteryBrand}
              onChange={(e) => setBatteryBrand(e.target.value)}
            >
              <option value="">All Brands</option>
              <option value="amaron">Amaron</option>
              <option value="exide">Exide</option>
              <option value="powerzone">PowerZone</option>
              <option value="sf-sonic">SF Sonic</option>
              <option value="dynex">Dynex (Manufacturing by Exide Ind)</option>
              <option value="ac-delco">AC Delco</option>
              <option value="bosch">BOSCH</option>
              <option value="livfast">Livfast</option>
              {/* Add more battery brands here */}
            </select>
          </div>
          <button
            type="submit"
            onMouseOver={(e) => e.target.style.backgroundColor = '#ff767b'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ff5a5f'}
          >
            FIND
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 10rem; /* Initial padding for top and bottom, and left and right */
  display: flex;
  flex-direction: row; /* Ensure flex direction is row */
  justify-content: space-between; /* Space between the two sections */
  align-items: flex-start; /* Align items to the top */
  text-align: left; /* Align text to the left */

  .section-hero-content {
    display: flex;
    flex-direction: column;
    margin-right: 4rem; /* Space between image and form */
  }

  .section-hero-image {
    margin-bottom: 4rem; /* Space below image */
    padding: 2rem; /* Added padding around the image */
  }

  .hero-img {
    max-width: 300px; /* Adjusted size of the image */
    height: auto;
    width: 100%;
    display: block;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 3.2rem; /* Adjust font size if needed */
    margin-top: 1.5rem; /* Adjust margin for heading */
  }

  .hero-para {
    margin-top: 2rem;
    margin-bottom: 4rem;
    max-width: 60rem; /* Limit max width for responsive design */
  }

  .dropdown-form {
    max-width: 600px;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: #f0f0f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;

    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
      font-size: 24px;
      font-weight: 600;
    }

    .form-group {
      margin-bottom: 20px;

      label {
        display: block;
        margin-bottom: 10px;
        color: #555;
        font-weight: 500;
      }

      select {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
        margin-bottom: 15px;
        font-family: 'Poppins', sans-serif;
      }
    }

    button {
      padding: 15px 25px;
      background-color: #ff5a5f;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
      transition: background-color 0.3s ease;
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column; /* Stack the sections vertically on mobile */
    align-items: center; /* Center align the items */

    padding: 7rem 4rem; /* Adjust padding for mobile */

    .section-hero-content {
      margin-right: 0; /* Remove margin for mobile view */
      margin-bottom: 3rem; /* Space between image and form on mobile */
    }

    .hero-img {
      max-width: 100%; /* Adjust image size for mobile */
    }

    .dropdown-form {
      width: 100%; /* Full width for mobile view */
    }
  }
`;

export default HeroSection;