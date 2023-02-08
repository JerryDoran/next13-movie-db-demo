import Link from 'next/link';
import './globals.css';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={`${montserrat.className} mx-20`}>
        <nav className='flex justify-between px-4'>
          <h1>Logo</h1>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/about'>Sign Up</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
