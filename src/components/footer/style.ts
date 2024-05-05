'use client';
import styled from 'styled-components';


export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7rem 0  2rem 0;
  font-size: 1.4rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  color: ${({theme}) => theme.Colors.quinary};
  background-color: ${({theme}) => theme.Colors.primary};

  span{
    font-size: 1rem;
  }
`;