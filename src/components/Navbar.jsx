import { Menu, X } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, scroll }) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <img src="/logo_convertes.png" className="h-14" />

        <div className="hidden md:flex space-x-8">
          {['home','about','services','testimonials'].map(item => (
            <button key={item} onClick={() => scroll(item)} className="nav-link">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button onClick={() => scroll('contact')} className="btn-primary">
            Contact Us
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
