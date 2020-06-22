import Head from 'next/head';
import ImageGrid from '../components/imageGrid';
import Layout from '../components/Layout';

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Babshai.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <img
            className="max-h-screen w-full object-cover"
            src="/bg.jpg"
            alt=""
          />
        </div>

        <ImageGrid />
      </Layout>
    </div>
  );
};

export default Home;
