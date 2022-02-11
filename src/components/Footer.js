import React from 'react'
import styled from 'styled-components';

import { imgUrl } from '../app/helpers';

function Footer() {
  return (
    <Container>
      <Logo src={imgUrl + "logo.svg"} alt="Disney plus logo" />
      <FooterMenu>
        <a href='*'><span>Link 1</span></a>
        <a href='*'><span>Link 2</span></a>
        <a href='*'><span>Link 3</span></a>
        <a href='*'><span>Link 4</span></a>
        <a href='*'><span>Link 5</span></a>
      </FooterMenu>
      <Copywrite>&copy; [Company Name]. All Rights Reserved</Copywrite>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 26px 8px;
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
  margin: 5px auto 16px;
  width: 100%;
  
  font-size: 14px;
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