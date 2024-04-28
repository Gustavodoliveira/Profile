'use client';

import React from 'react';
import { HeaderContainer, HeaderText, NavContainer } from './style';
import Link from 'next/link';
import Button from '../button/Button';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>
        <h1>Desenvolvedor Full Stack </h1>
        <h2>Gustavo de Oliveira</h2>
      </HeaderText>
      <NavContainer>
        <ul>
          <li>
            <Link href={'/'}>Projetos</Link>
          </li>
          <li>
            <Link href={'/'}>Skills</Link>
          </li>
          <li>
            <Link href={'/'}>Sobre</Link>
          </li>
        </ul>
      </NavContainer>
      <Button href="/">GITHUB</Button>
    </HeaderContainer>
  );
};

export default Header;
