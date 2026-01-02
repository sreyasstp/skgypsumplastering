import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../utils/useScrollAnimation';

export default function Contact() {
  const headerRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#8B5A5F] to-[#6f4549] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div ref={headerRef} className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">

          {/* LEFT – CONTACT INFO */}
          <div ref={leftRef} className="animate-left">
            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-7">
              <ContactItem icon={Phone} title="Phone" text="+91 99957 04774" />
              <ContactItem icon={Mail} title="Email" text="skgypsumplastering@gmail.com" />
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

          {/* RIGHT – CTA CARD */}
          <div
            ref={rightRef}
            className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20 animate-right"
          >
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
              ].map((text, index) => {
                const ref = useScrollAnimation(index * 120);
                return (
                  <li
                    key={index}
                    ref={ref}
                    className="flex items-start gap-3 animate-item"
                  >
                    <CheckCircle size={22} className="text-white mt-1" />
                    <span className="text-white/95">{text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-2">Service Areas</h4>
              <p className="text-white/90">
                Palakkad • Ottapalam • Mannarkkad • Alathur • Nearby Areas
              </p>
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

/* Small reusable component */
function ContactItem({ icon: Icon, title, text, multiline }) {
  return (
    <div className="flex items-start space-x-4">
      <Icon className="flex-shrink-0 mt-1" size={24} />
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
