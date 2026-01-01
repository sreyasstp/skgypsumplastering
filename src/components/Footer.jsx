export default function Footer({ scroll }) {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
          <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
  <img
    src="/logo_convertes.png"
    alt="SK Gypsum Plastering"
    className="h-16 mb-4 brightness-0 invert"
  />
  <p className="text-gray-400 leading-relaxed">
    SK Gypsum Plastering<br />
    Venkatesa Garden, Near Prasannalakshmi Kalyana Mandapam<br />
    Palakkad – 678006
  </p>
  <p className="text-gray-400 mt-2">
    📞 +91 99957 04774<br />
    ✉️ skgypsumplastering@gmail.com
  </p>
</div>

  
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['home', 'about', 'services', 'contact'].map(link => (
                  <button
                    key={link}
                    onClick={() => scroll(link)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                ))}
              </div>
            </div>
  
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Residential Plastering</div>
                <div>Commercial Projects</div>
                <div>Ceiling Installation</div>
                <div>Wall Partitioning</div>
              </div>
            </div>
  
          </div>
  
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2026 SK Gypsum Plastering. All rights reserved.
          </div>
  
        </div>
      </footer>
    );
  }
  