'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { IconContainer } from './styled';

interface IconProps {
  icon: IconType;
  title: string;
  Class?: string | undefined;
}

const Icon = (props: IconProps) => {
  return (
    <IconContainer>
      <props.icon
        className={props.Class ? props.Class : ''}
        title={props.title}
      />
    </IconContainer>
  );
};

export default Icon;
