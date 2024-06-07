import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const primaryColor = 'rgb(98, 84, 243)';
const secondaryColor = '#28a745';
const textColor = '#333';
const borderColor = '#ccc';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
  font-family: Arial, sans-serif;
`;

const SignUpBox = styled.div`
  width: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  color: ${textColor};
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${textColor};
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${borderColor};
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${primaryColor};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${borderColor};
  outline: none;
  transition: border-color 0.3s;
  resize: none;

  &:focus {
    border-color: ${primaryColor};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${primaryColor};
  color: #fff;
  margin-top: 10px;

  &:hover {
    background-color: ${secondaryColor};
  }
`;

const LoginContainer = styled.div`
  margin-top: 20px;
`;

const LoginText = styled.p`
  margin-bottom: 10px;
  color: ${textColor};
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone:', phone);
    console.log('Address:', address);
    // Perform sign-up logic here
  };

  const handleLogin = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Container>
      <SignUpBox>
        <Heading>Sign Up</Heading>
        <Form onSubmit={handleSignUp}>
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="phone">Phone Number:</Label>
            <Input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="address">Address:</Label>
            <TextArea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </FormField>
          <Button type="submit">Sign Up</Button>
        </Form>
        <LoginContainer>
          <LoginText>Already have an account?</LoginText>
          <Button onClick={handleLogin}>Login</Button>
        </LoginContainer>
      </SignUpBox>
    </Container>
  );
};

export default SignUp;
