import React from 'react';
import { FooterContainer } from './style';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <h3>
        Development by Gustavo2024{' '}
        <span>
          <FaCopyright />
        </span>
      </h3>
    </FooterContainer>
  );
};

export default Footer;
