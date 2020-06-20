import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Main from '../components/main';
import Link from 'next/link';
import Grid from '../components/grid';
import ImageGrid from '../components/imageGrid';

export const Home = () => {
  const images = [{ url: '/bg.jpg' }, { url: 'images/card.jpg' }];
  return (
    <div className="relative">
      <Head>
        <title>Babshai.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>
        <img
          className="max-h-screen w-full object-cover"
          src="/bg.jpg"
          alt=""
        />
      </div>

      <ImageGrid />
      <Footer />
    </div>
  );
};

export default Home;
