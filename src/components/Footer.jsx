import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <Wrapper>
      <ContactShortSection>
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </ContactShortSection>

      <FooterSection>
        <div className="container grid grid-four-column">
          <FooterAbout>
            <h3>Spark Battery</h3>
            <p>We not only provide batteries, but we also offer battery services!</p>
          </FooterAbout>

          <FooterSubscribe>
            <h3>We're here for you all 7 days of the week from 9 am to 9:30 pm!</h3>
          </FooterSubscribe>

          <FooterSocial>
            <h3>Contact Us</h3>
            <div className="footer-social-icons">
              <SocialIcon>
                <FaInstagram className="icon" aria-label="Instagram" />
              </SocialIcon>
              <SocialIcon>
                <IoLogoWhatsapp className="icon" aria-label="WhatsApp" />
              </SocialIcon>
              <SocialIcon>
                <HiOutlineMail className="icon" aria-label="Email" />
              </SocialIcon>
            </div>
          </FooterSocial>

          <FooterContact>
            <h3>Call Us</h3>
            <h3>+91 090823 23091</h3>
          </FooterContact>
        </div>

        <FooterBottomSection>
          <hr />
          <div className="container grid grid-two-column">
            <p>&copy; {new Date().getFullYear()} Spark Battery. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </FooterBottomSection>
      </FooterSection>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const ContactShortSection = styled.section`
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);
  
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    max-width: 95vw;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-short-btn {
      text-align: center;
      justify-self: flex-start;
    }
  }
`;

const FooterSection = styled.footer`
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};

  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.white};
  }

  .footer-social-icons {
    display: flex;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .footer-bottom-section {
      padding-top: 3.2rem;
    }
  }
`;

const FooterAbout = styled.div``;

const FooterSubscribe = styled.div``;

const FooterSocial = styled.div``;

const SocialIcon = styled.div`
  padding: 1rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};

  .icon {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    cursor: pointer;
  }
`;

const FooterContact = styled.div``;

const FooterBottomSection = styled.div`
  padding-top: 9rem;

  hr {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.hr};
    height: 0.1px;
  }
`;

export default Footer;
