import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [batteryBrand, setBatteryBrand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(`Car Make: ${carMake}, Car Model: ${carModel}, Battery Brand: ${batteryBrand}`);
  };

  return (
    <Container>
      <FormContainer>
        <h2>Car Battery Finder</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="car-make">Car Make</label>
            <select
              id="car-make"
              value={carMake}
              onChange={(e) => setCarMake(e.target.value)}
              style={{ color: '#007bff' }} // Change text color of selected option
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
              style={{ color: '#007bff' }} // Change text color of selected option
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
              style={{ color: '#007bff' }} // Change text color of selected option
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
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end; /* Align the form to the right */
  padding: 20px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      color: #555;
      font-weight: 500;
    }

    select {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      font-family: 'Poppins', sans-serif;
    }
  }

  button {
    padding: 12px 20px;
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
`;

export default App;