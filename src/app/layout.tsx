import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import type AppType from '@/types/app';

export const metadata: Metadata = {
  title: 'Next Js 13 - Peyman Naderi',
  description: 'FrontEnd Developer',
};

const htmlAttribute: React.HtmlHTMLAttributes<HTMLHtmlElement> = {
  dir: 'ltr',
  lang: 'en-US',
};

export default function RootLayout({ children }: AppType.RootLayout): React.ReactElement {
  return (
    <html {...htmlAttribute}>
      <body>{children}</body>
    </html>
  );
}
