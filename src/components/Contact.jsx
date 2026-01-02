import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Menu, X } from 'lucide-react';
import { benefits } from '../data/benefits';

export default function Contact() {
  return (
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
  );
}
