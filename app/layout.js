import './globals.css';
import Sprite from '../components/Sprite';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Behaviors from '../components/Behaviors';

export const metadata = {
  title: 'GetCrux | Creative OS for launching high performing ads',
  description:
    'A self-improving system for performance creatives. GetCrux connects ad data, competitor insight and your brand kit to go from insight to creative in minutes.',
  icons: { icon: '/assets/img/jgY4E0azHO4gJp4Z4TwPNW3T7A.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">
        <Sprite />
        <Header />
        {children}
        <Footer />
        <Behaviors />
      </body>
    </html>
  );
}
