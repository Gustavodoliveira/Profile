'use client';

import React from 'react';
import {
  HeaderButtonContainer,
  HeaderContainer,
  HeaderImageAndCvContainer,
  HeaderText,
} from './style';
import Button from '../button/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiDownArrow } from 'react-icons/bi';
import file from '../../../public/images/frequency-wave-7776034_1280.jpg';
import { FiDownload } from 'react-icons/fi';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>
        <h1>Desenvolvedor Full Stack </h1>
        <h2>Gustavo de Oliveira</h2>
      </HeaderText>
      <HeaderButtonContainer>
        <Button
          href="https://github.com/Gustavodoliveira"
          className="btn-github"
        >
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
        <Button href={file.src} download="file.doc" className="btn-cv">
          <FiDownload /> Download CV
        </Button>
      </HeaderImageAndCvContainer>
      <BiDownArrow className="Arrow-on-bottom" />
    </HeaderContainer>
  );
};

export default Header;
