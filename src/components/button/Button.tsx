import React from 'react';
import { ButtonContainer } from './style';

interface buttonProps {
  children: React.ReactNode;
  href: string | undefined;
}

const Button = (props: buttonProps) => {
  return <ButtonContainer href={props.href}>{props.children}</ButtonContainer>;
};

export default Button;
