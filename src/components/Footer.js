import React from 'react'
import styled from 'styled-components';

import { imgUrl } from '../app/helpers';

const Footer = (props) => {
  return (
    <Container>
      <Logo src={imgUrl + "logo.svg"} alt="Disney plus logo" />
      <FooterMenu>
        <a href='/'><span>Privacy Policy</span></a>
        <a href='/'><span>Subscriber Agreement</span></a>
        <a href='/'><span>Help</span></a>
        <a href='/'><span>Supported Devices</span></a>
        <a href='/'><span>About Us</span></a>
      </FooterMenu>
      <Copywrite>&copy; [Placeholder]. All Rights Reserved</Copywrite>
    </Container>
  )
}

// ----------- [Styled Components] ----------- // 

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 8px;
  margin: 100px 0 0 0;
  
  text-align: center;
  background-position: 50%;
  background: var(--bg-secondary);
`;

const Logo = styled.img`
  max-width: 130px;
  width: 80px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 80px;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto 0;
  width: 100%;
  
  font-size: 12px;
  line-height: 22px;
  
  a {
    color: var(--text-muted);
    padding: 8px 12px;
    text-decoration: none;
    transition: all 240ms ease-in-out;
  }

  a:hover {
    color: var(--text-primary);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin: 5px auto 10px;
    font-size: 12px;
  }
`;

const Copywrite = styled(FooterMenu)`
  color: var(--text-muted);
`;



export default Footer;