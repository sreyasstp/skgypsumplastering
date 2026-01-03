import { Menu, X } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, scrollToSection }) {
  const menuItems = ['home', 'about', 'services', 'gallery', 'testimonials'];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/log.png"
              alt="SK Gypsum Plastering"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-[#8B5A5F] transition-colors font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#8B5A5F] text-white px-6 py-2 rounded-lg hover:bg-[#73494D] transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-700 hover:text-[#8B5A5F] py-2 font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-[#8B5A5F] text-white px-6 py-2 rounded-lg hover:bg-[#73494D] transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
