import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 50px 0;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
  }
`;

const ContactForm = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
      width: 100%;
      padding: 15px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      transition: border-color 0.3s;
    }

    input:focus,
    textarea:focus {
      border-color: #7b68ee;
    }

    button {
      background-color: #7b68ee;
      color: #fff;
      border: none;
      padding: 15px 30px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #6a5acd;
    }
  }

  .status-message {
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    color: ${props => props.success ? 'green' : 'red'};
  }
`;

const MapContainer = styled.div`
  margin-bottom: 30px;

  iframe {
    width: 100%;
    height: 300px;
    border: 0;
    border-radius: 10px;
  }
`;

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(''); // Clear previous status message

    try {
      console.log('Sending email with the following data:', { email, message });
      const response = await fetch('http://localhost:5173/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const result = await response.json();
      console.log('Response received:', result);

      if (result.success) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      setStatus('An error occurred.');
    }
  };

  return (
    <Wrapper>
      <Container>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5198676889836!2d72.84053829999999!3d18.996800399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefae5d3df8d%3A0xd9b3c4fe01a234e8!2sSpark%20Battery!5e0!3m2!1sen!2sin!4v1717269350294!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
        <ContactInfo>
          <p>
            <strong>Address:</strong> Shop no 420, DR S S RAO ROAD, S.P COMPOUND, BEHIND K E M HOSPITAL, PAREL, MUMBAI 400012
          </p>
          <p>
            <strong>Phone:</strong> +91 090823 23091
          </p>
          <p>
            <strong>Email:</strong> Sparkbattery14@gmail.com
          </p>
        </ContactInfo>
        <ContactForm success={status === 'Email sent successfully!'}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="5"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </ContactForm>
      </Container>
    </Wrapper>
  );
};

export default Contact;
