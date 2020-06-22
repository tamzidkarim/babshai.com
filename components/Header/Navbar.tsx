import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  { href: '/cart', label: 'Cart' },
  { href: '/login', label: 'Log In' },
  { href: '/signup', label: 'Sign Up' },
];

const navlinks = ['Products', 'Suppliers', 'Services', 'Contact', 'About'];

export default function Nav() {
  const sticky = 'fixed w-full transition duration-700 z-10 shadow-lg';
  const blackSticky =
    'fixed top-0 w-full transition duration-700 z-10 bg-white shadow-lg';

  const [csticky, setcSticky] = useState<any>(sticky);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled) {
        setcSticky(blackSticky);
      } else {
        setcSticky(sticky);
      }
    });
  }, []);
  return (
    <nav className={csticky}>
      <ul className="flex justify-between items-center px-8 py-2  ">
        <li>
          <Link href="/">
            <a className="font-mono text-red-500 text-3xl no-underline">
              Babshai.com
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {navlinks.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="no-underline text-black hover:text-red-500 "
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
