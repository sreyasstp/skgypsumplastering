import { Phone, Mail, MapPin, Clock, CheckCircle, Navigation } from 'lucide-react';
import useScrollAnimation from '../utils/useScrollAnimation';

export default function Contact() {
  const headerRef = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#8B5A5F] to-[#6f4549] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div ref={headerRef} className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote
          </p>
        </div>

        {/* CONTACT INFO – SPLIT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-6">
            <ContactItem icon={Phone} title="Phone" text="+91 99957 04774" />
            <ContactItem icon={Mail} title="Email" text="skgypsumplastering@gmail.com" />
          </div>

          <div className="space-y-6">
            <ContactItem
              icon={MapPin}
              title="Address"
              multiline={[
                'SK Gypsum Plastering',
                'Venkatesa Garden',
                'Near Prasannalakshmi Kalyana Mandapam',
                'Palakkad – 678006'
              ]}
            />
            <ContactItem
              icon={Clock}
              title="Business Hours"
              multiline={[
                'Monday – Saturday: 10:00 AM – 6:00 PM',
                'Sunday: Closed'
              ]}
            />
          </div>
        </div>

        {/* PARALLEL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT CARD – MAP */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <div className="relative flex-grow min-h-[320px]">
              <iframe
                title="SK Gypsum Plastering Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.568391767253!2d76.638654!3d10.767709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ2JzAzLjgiTiA3NsKwMzgnMTkuMiJF!5e0!3m2!1sen!2sin!4v1767322984667!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4">
              <a
                href="https://maps.google.com/maps/dir//10.7677222,76.6386667/@10.7677222,76.6386667,16z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#8B5A5F] text-white py-3 rounded-lg font-semibold hover:bg-[#73494D] transition"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT CARD – CTA */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-8">
                Why Choose SK Gypsum Plastering?
              </h3>

              <ul className="space-y-4 text-lg">
                {[
                  'High-quality gypsum plaster with smooth finishing',
                  'Experienced team with 10+ years of work',
                  'On-time completion and clean work site',
                  'Affordable pricing with honest quotes',
                  'Residential and commercial projects handled'
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={22} className="text-white mt-1" />
                    <span className="text-white/95">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-2">Service Areas</h4>
                <p className="text-white/90">
                  Palakkad • Malappuram • Thrissur • Nearby Areas
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919995704774"
                className="bg-white text-[#8B5A5F] text-center px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919995704774?text=Hi%20SK%20Gypsum%20Plastering,%20I%20would%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white text-center px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
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

/* CONTACT ITEM */
function ContactItem({ icon: Icon, title, text, multiline }) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="flex-shrink-0 mt-1" size={22} />
      <div>
        <div className="font-semibold text-lg">{title}</div>
        {text && <div className="text-white/90">{text}</div>}
        {multiline &&
          multiline.map((line, i) => (
            <div key={i} className="text-white/90">
              {line}
            </div>
          ))}
      </div>
    </div>
  );
}
