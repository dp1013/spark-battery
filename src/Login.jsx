import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define primary and secondary colors
const primaryColor = 'rgb(98, 84, 243)'; // Primary color
const secondaryColor = '#28a745'; // Secondary color

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
    fontFamily: 'Arial, sans-serif',
  },
  loginBox: {
    width: '400px',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  primaryButton: {
    backgroundColor: primaryColor,
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: secondaryColor,
    color: '#fff',
    marginTop: '10px',
  },
  signUpContainer: {
    marginTop: '20px',
  },
  signUpText: {
    marginBottom: '10px',
    color: '#333',
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={{ ...styles.button, ...styles.primaryButton }}>Login</button>
        </form>
        <div style={styles.signUpContainer}>
          <p style={styles.signUpText}>Not registered?</p>
          <button onClick={handleSignUp} style={{ ...styles.button, ...styles.secondaryButton }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
