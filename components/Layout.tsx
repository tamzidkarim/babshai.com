import Footer from './Footer';
import Header from './Header/Header';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="pb-16">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
