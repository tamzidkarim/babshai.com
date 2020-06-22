import Head from 'next/head';
import { useState, useEffect } from 'react';

// const [class, setClass] = useState(sticky);

export const Home = () => {
  const sticky =
    'fixed top-0 left-0 w-full flex justify-between items-center transition duration-700 px-20 py-4 z-10';
  const blackSticky =
    'fixed top-0 left-0 w-full flex justify-between items-center transition duration-700 px-20 z-10 bg-black';

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
    <div className="relative min-h-screen bg-black">
      <Head>
        <title>Sticky Header</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={csticky}>
        <a
          href=""
          className="relative font-bold text-white text-3xl uppercase tracking-wider"
        >
          Logo
        </a>
        <ul className="relative flex items-center justify-center ">
          <li>
            <a
              className="relative text-white tracking-wide m-1 transition duration-700"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="relative text-white tracking-wide m-1 transition duration-700"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="relative text-white tracking-wide m-1 transition duration-700"
              href="#"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="relative text-white tracking-wide m-1 transition duration-700"
              href="#"
            >
              Services
            </a>
          </li>
        </ul>
      </header>
      <section className="relative h-screen w-full bg-cover">
        <img src="/bg.jpg" alt="" />
      </section>
    </div>
  );
};

export default Home;
