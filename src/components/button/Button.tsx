'use client';
import React from 'react';
import { ButtonContainer } from './style';

interface buttonProps {
  children: React.ReactNode;
  href: string | undefined;
  className?: string;
}

const Button = (props: buttonProps) => {
  return (
    <ButtonContainer
      href={props.href}
      className={props.className ? props.className : ''}
    >
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
