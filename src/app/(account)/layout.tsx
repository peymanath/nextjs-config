import React from 'react';
import type { RootLayout } from '@/types/app';

const Layout: React.FC<RootLayout> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default Layout;
