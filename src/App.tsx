import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: 'Residential Plastering',
      description: 'Expert plastering services for homes, including walls, ceilings, and architectural features.',
      icon: '🏠'
    },
    {
      title: 'Commercial Projects',
      description: 'Large-scale plastering solutions for offices, retail spaces, and commercial buildings.',
      icon: '🏢'
    },
    {
      title: 'Ceiling Installation',
      description: 'Professional gypsum ceiling installation with various designs and finishes.',
      icon: '⬜'
    },
    {
      title: 'Wall Partitioning',
      description: 'Durable and efficient gypsum board partitions for space optimization.',
      icon: '🧱'
    },
    {
      title: 'Decorative Finishes',
      description: 'Custom textures, moldings, and ornamental plaster work for elegant interiors.',
      icon: '✨'
    },
    {
      title: 'Repairs & Renovation',
      description: 'Expert repair services for damaged plaster, cracks, and restoration work.',
      icon: '🔧'
    }
  ];

  const benefits = [
    'Certified & Licensed Professionals',
    'High-Quality Materials',
    '10+ Years of Experience',
    'On-Time Project Completion',
    'Competitive Pricing',
    'Free Consultations & Quotes'
  ];

  const testimonials = [
    {
      name: 'David Richardson',
      role: 'Homeowner',
      text: 'Outstanding work on our home renovation. The team was professional, clean, and the finish quality is exceptional.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      role: 'Property Developer',
      text: 'We\'ve used SK Gypsum Plastering for multiple commercial projects. Always reliable and delivers perfect results.',
      rating: 5
    },
    {
      name: 'James Cooper',
      role: 'Interior Designer',
      text: 'The attention to detail is remarkable. They bring our design visions to life with precision and craftsmanship.',
      rating: 5
    }
  ];

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

      <section id="home" className="pt-20 bg-gradient-to-br from-[#E5D5D0] via-white to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Ultimate Plastering Solution
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your spaces with expert gypsum plastering services. We deliver precision, quality, and craftsmanship in every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#8B5A5F] text-white px-8 py-4 rounded-lg hover:bg-[#73494D] transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
                >
                  Get Free Quote
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-[#8B5A5F] text-[#8B5A5F] px-8 py-4 rounded-lg hover:bg-[#8B5A5F] hover:text-white transition-all font-semibold text-lg"
                >
                  Our Services
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#8B5A5F]">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8B5A5F]">500+</div>
                  <div className="text-gray-600">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8B5A5F]">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#8B5A5F] rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
                <img
                  src="/logo_convertes.png"
                  alt="SK Gypsum Plastering"
                  className="w-full h-auto transform -rotate-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About SK Gypsum Plastering</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry leaders in professional plastering services with a commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over a decade of experience in the plastering industry, SK Gypsum Plastering has established itself as a trusted name in delivering superior quality workmanship for residential and commercial projects.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of certified professionals uses the finest materials and latest techniques to ensure every project meets the highest standards of quality and durability.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From simple repairs to complex architectural features, we approach each project with the same dedication to perfection and customer satisfaction.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a free consultation and quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-white/90">+1 (555) 123-4567</div>
                    <div className="text-white/90">+1 (555) 987-6543</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-white/90">info@skgypsumplastering.com</div>
                    <div className="text-white/90">quotes@skgypsumplastering.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Address</div>
                    <div className="text-white/90">123 Construction Avenue</div>
                    <div className="text-white/90">Business District, City, State 12345</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Business Hours</div>
                    <div className="text-white/90">Monday - Friday: 7:00 AM - 6:00 PM</div>
                    <div className="text-white/90">Saturday: 8:00 AM - 4:00 PM</div>
                    <div className="text-white/90">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A5F] focus:ring-2 focus:ring-[#8B5A5F]/20 outline-none transition-all text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A5F] focus:ring-2 focus:ring-[#8B5A5F]/20 outline-none transition-all text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A5F] focus:ring-2 focus:ring-[#8B5A5F]/20 outline-none transition-all text-gray-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A5F] focus:ring-2 focus:ring-[#8B5A5F]/20 outline-none transition-all text-gray-900">
                    <option>Select a service</option>
                    <option>Residential Plastering</option>
                    <option>Commercial Projects</option>
                    <option>Ceiling Installation</option>
                    <option>Wall Partitioning</option>
                    <option>Decorative Finishes</option>
                    <option>Repairs & Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A5F] focus:ring-2 focus:ring-[#8B5A5F]/20 outline-none transition-all text-gray-900"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8B5A5F] text-white px-8 py-4 rounded-lg hover:bg-[#73494D] transition-all font-semibold text-lg shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <img
                src="/logo_convertes.png"
                alt="SK Gypsum Plastering"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for professional gypsum plastering services. Quality workmanship, reliable service, exceptional results.
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
