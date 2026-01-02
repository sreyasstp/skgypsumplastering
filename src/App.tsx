import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { services } from './data/services';
import { benefits } from './data/benefits';
import { testimonials } from './data/testimonials';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="/logo_convertes.png"
                alt="SK Gypsum Plastering"
                className="h-14 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#8B5A5F] transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#8B5A5F] transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#8B5A5F] transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#8B5A5F] transition-colors font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-[#8B5A5F] text-white px-6 py-2 rounded-lg hover:bg-[#73494D] transition-colors font-medium">
                Contact Us
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-[#8B5A5F] py-2 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-[#8B5A5F] py-2 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-[#8B5A5F] py-2 font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-[#8B5A5F] py-2 font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left bg-[#8B5A5F] text-white px-6 py-2 rounded-lg hover:bg-[#73494D] transition-colors font-medium">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
      <section
  id="home"
  className="pt-20 relative overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1581093458791-9f3c3900df3c?auto=format&fit=crop&w=1600&q=80')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#E5D5D0]/95 via-white/90 to-white/80" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid md:grid-cols-2 gap-14 items-center">

      {/* LEFT */}
      <div className="animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The Ultimate<br />Plastering Solution
        </h1>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
          Professional gypsum plastering for homes and commercial spaces with
          smooth finishing and long-lasting quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#8B5A5F] text-white px-8 py-4 rounded-lg hover:bg-[#73494D] transition transform hover:scale-105 font-semibold shadow-lg"
          >
            Get Free Quote
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="border-2 border-[#8B5A5F] text-[#8B5A5F] px-8 py-4 rounded-lg hover:bg-[#8B5A5F] hover:text-white transition font-semibold"
          >
            Our Services
          </button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Done' },
            { value: '100%', label: 'Satisfaction' },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-[#8B5A5F]">
                {item.value}
              </div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative animate-fadeInRight">
        <div className="bg-[#8B5A5F] rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform">
          <img
            src="/logo_convertes.png"
            alt="SK Gypsum Plastering"
            className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry leaders in professional plastering services with a commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    SK Gypsum Plastering offers professional gypsum plastering services for
    residential and commercial projects.
  </p>

  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    With over 10 years of experience, we focus on clean work, smooth finishing,
    and quality materials.
  </p>

  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
    Every project is completed on time with attention to detail and customer
    satisfaction.
  </p>
</div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-neutral-50 p-4 rounded-lg">
                  <CheckCircle className="text-[#8B5A5F] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-neutral-50 to-[#E5D5D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plastering solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-8 shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-[#8B5A5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a free consultation and quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT: Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-white/90">+91 99957 04774</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-white/90">skgypsumplastering@gmail.com</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Address</div>
                    <div className="text-white/90">SK Gypsum Plastering</div>
                    <div className="text-white/90">Venkatesa Garden</div>
                    <div className="text-white/90">Near Prasannalakshmi Kalyana Mandapam</div>
                    <div className="text-white/90">Palakkad – 678006</div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <Clock className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Business Hours</div>
                    <div className="text-white/90">Monday – Saturday: 10:00 AM – 6:00 PM</div>
                    <div className="text-white/90">Sunday: Closed</div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT: CTA & Info */}
            <div className="bg-white/10 rounded-xl p-10 border border-white/20">

              <h3 className="text-3xl font-bold mb-6">
                Why Choose SK Gypsum Plastering?
              </h3>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span>✔</span>
                  High-quality gypsum plaster with smooth finishing
                </li>
                <li className="flex items-start gap-3">
                  <span>✔</span>
                  Experienced team with 10+ years of work
                </li>
                <li className="flex items-start gap-3">
                  <span>✔</span>
                  On-time completion and clean work site
                </li>
                <li className="flex items-start gap-3">
                  <span>✔</span>
                  Affordable pricing with honest quotes
                </li>
                <li className="flex items-start gap-3">
                  <span>✔</span>
                  Residential and commercial projects handled
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-2">Service Areas</h4>
                <p className="text-white/90">
                  Palakkad • Ottapalam • Mannarkkad • Alathur • Nearby Areas
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919995704774"
                  className="bg-white text-[#8B5A5F] text-center px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919995704774?text=Hi%20SK%20Gypsum%20Plastering,%20I%20would%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  WhatsApp Us
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
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
    <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.7L.3 31.5l8-2.1c2.2 1.2 4.7 1.9 7.4 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.1c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2.1-2-4.6-2-7.2C3 8.5 9.2 2.3 16 2.3S29 8.5 29 15.5 22.8 28.6 16 28.6zm7.4-9.9c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.9.2s-1 1.2-1.2 1.4-.4.3-.8.1c-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.3-2.9-.3-.8-.7-.7-.9-.7h-.8c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.4 3.4.9 4 .9.6-.1 2-0.8 2.3-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.7-.5z"/>
  </svg>
</a>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <img
                src="/logo_convertes.png"
                alt="SK Gypsum Plastering"
                className="h-16 w-auto mb-4"
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
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
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
            <p>&copy; 2026 SK Gypsum Plastering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
