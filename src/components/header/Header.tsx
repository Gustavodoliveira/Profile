'use client';

import React from 'react';
import {
  HeaderButtonContainer,
  HeaderContainer,
  HeaderImageAndCvContainer,
  HeaderText,
  NavContainer,
} from './style';
import Link from 'next/link';
import Button from '../button/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiDownArrow } from 'react-icons/bi';
import file from '../../../public/images/frequency-wave-7776034_1280.jpg';

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
      <HeaderButtonContainer>
        <Button href="/" className="btn-github">
          GITHUB{' '}
          <span>
            {' '}
            <AiFillGithub className="github-icon" />
          </span>
        </Button>
        <Button href="/" className="btn-linkedin">
          LINKEDIN{' '}
          <span>
            <AiFillLinkedin className="linkedin-icon" />
          </span>
        </Button>
      </HeaderButtonContainer>
      <HeaderImageAndCvContainer>
        <div className="image">
          <h2>image</h2>
        </div>
        <a href={file.src} download={'file.doc'}>
          dowload cv
        </a>
      </HeaderImageAndCvContainer>
      <BiDownArrow className="Arrow-on-bottom" />
    </HeaderContainer>
  );
};

export default Header;
