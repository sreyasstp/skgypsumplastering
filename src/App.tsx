import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">

      {/* Navbar */}
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Sections */}
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919995704774?text=Hi%20SK%20Gypsum%20Plastering,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.7L.3 31.5l8-2.1c2.2 1.2 4.7 1.9 7.4 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.1c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2.1-2-4.6-2-7.2C3 8.5 9.2 2.3 16 2.3S29 8.5 29 15.5 22.8 28.6 16 28.6zm7.4-9.9c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.9.2s-1 1.2-1.2 1.4-.4.3-.8.1c-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.3-2.9-.3-.8-.7-.7-.9-.7h-.8c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.4 3.4.9 4 .9.6-.1 2-0.8 2.3-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </a>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
