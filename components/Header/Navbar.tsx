import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const links = [
  { href: '/cart', label: 'Cart' },
  { href: '/login', label: 'Log In' },
  { href: '/signup', label: 'Sign Up' },
];

const navlinks = ['Products', 'Suppliers', 'Services', 'Contact', 'About'];

const Navbar: React.FC<any> = (): JSX.Element => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (isAuthenticated) {
    links[1].label = user.name;
    links[1].href = `/accounts/${user.name}`;
  }

  const sticky =
    'fixed w-full transition duration-700 z-10 gradient-black shadow-lg';
  const blackSticky =
    'fixed top-0 w-full transition duration-700 z-10 bg-white shadow-lg';

  const [csticky, setcSticky] = useState<any>(sticky);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    if (isScrolled) {
      setcSticky(blackSticky);
    } else {
      setcSticky(sticky);
    }
  };

  useEffect(() => {
    // const abortController = new AbortController();
    // const signal = abortController.signal;

    window.addEventListener('scroll', handleScroll);

    return () => {
      // second, we return an anonymous clean up function
      // abortController.abort();
      // console.log('cleaned up');
      window.removeEventListener('scroll', handleScroll);
    };
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
                  className="no-underline text-gray-200 hover:text-red-500 "
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
};

export default Navbar;
