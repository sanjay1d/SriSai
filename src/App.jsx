import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BrandDetail from './pages/BrandDetail';
import BrandProductDetail from './pages/BrandProductDetail';
import Careers from './pages/Careers';
import About from './pages/About';
import ItmsJourney from './pages/ItmsJourney';
import Testimonial from './pages/Testimonial';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/itms-journey" element={<ItmsJourney />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/brand/:id" element={<BrandDetail />} />
          <Route path="/brand/:id/product/:slug" element={<BrandProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
