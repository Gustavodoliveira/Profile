'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './Variables';

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default ThemeClient;
