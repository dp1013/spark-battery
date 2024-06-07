import React from 'react';
import styled from 'styled-components';
import { FaBatteryFull, FaHandshake, FaTools, FaClock, FaThumbsUp, FaUserShield } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3.5em;
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: 20px;
  font-weight: 700;
`;

const SubHeading = styled.h2`
  font-size: 2.5em;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 40px;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.textDark};
  line-height: 1.8;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.helper};
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
`;

const IconBox = styled.div`
  text-align: center;
  width: 150px;
  margin-bottom: 20px;

  svg {
    font-size: 3.5em;
    color: ${(props) => props.theme.colors.btn};
  }

  p {
    margin-top: 10px;
    font-size: 1.2em;
    color: ${(props) => props.theme.colors.text};
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <SubHeading>Your Trusted Car Battery Store</SubHeading>
      <Text>
        Welcome to <Highlight>Spark Battery</Highlight>, your trusted partner in automotive power solutions. Our mission is to provide the highest quality car batteries and exceptional customer service to ensure your vehicle runs smoothly and efficiently.
      </Text>
      <IconContainer>
        <IconBox>
          <FaBatteryFull />
          <p>High Quality Batteries</p>
        </IconBox>
        <IconBox>
          <FaHandshake />
          <p>Exceptional Customer Service</p>
        </IconBox>
        <IconBox>
          <FaTools />
          <p>Expert Installation</p>
        </IconBox>
        <IconBox>
          <FaClock />
          <p>Fast Delivery</p>
        </IconBox>
        <IconBox>
          <FaThumbsUp />
          <p>Customer Satisfaction</p>
        </IconBox>
        <IconBox>
          <FaUserShield />
          <p>Trusted Warranty</p>
        </IconBox>
      </IconContainer>
      <Text>
        Founded in <Highlight>2000</Highlight>, we have over <Highlight>24</Highlight> years of experience in the automotive industry. We offer a wide range of car batteries from leading brands to meet the diverse needs of our customers. Our knowledgeable team is dedicated to helping you find the right battery for your vehicle and providing expert installation and maintenance services.
      </Text>
      <Text>
        At <Highlight>Spark Battery</Highlight>, we believe in the importance of reliability and performance. That's why we only stock batteries that meet our rigorous standards for quality and durability. Whether you're looking for a replacement battery or an upgrade, we have the perfect solution for you.
      </Text>
      <Text>
        Thank you for choosing <Highlight>Spark Battery</Highlight>. We look forward to serving you and keeping your vehicle powered for the road ahead.
      </Text>
    </AboutContainer>
  );
};

export default About;
