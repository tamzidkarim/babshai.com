import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FcClock, FcAssistant } from 'react-icons/fc';

const links = [
  { href: 'https://nextjs.org/docs', label: 'Cart' },
  { href: '/login', label: 'Log In' },
  { href: '/signup', label: 'Sign Up' },
];

const navlinks = ['Products', 'Suppliers', 'Services', 'Contact', 'About'];

export default function Nav() {
  return (
    <div>
      <nav className="bg-gray-800">
        <ul className="flex justify-between items-center px-8 py-1 bg-transparent ">
          <ul className="flex justify-between items-center space-x-4">
            <li className="flex items-center space-x-4">
              <FcAssistant />
              <p className="text-gray-600 text-sm ">+8801711121212</p>
            </li>
            <li className="flex items-center space-x-4">
              <FcClock />
              <p className="text-gray-600 text-sm ">
                ALL WEEK FROM 9 AM TO 9 PM
              </p>
            </li>
          </ul>

          <ul className="flex justify-between items-center space-x-4">
            <li className="text-sm text-gray-600">
              <FaFacebook />
            </li>
            <li className="text-sm text-gray-600">
              <FaInstagram />
            </li>
            <li className="text-sm text-gray-600">
              <FaTwitter />
            </li>
          </ul>
        </ul>
      </nav>
      <nav className="shadow-lg">
        <ul className="flex justify-between items-center px-8 py-2 bg-transparent ">
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
    </div>
  );
}
