import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import useScrollAnimation from '../utils/useScrollAnimation';
import useParallax from '../utils/useParallax1';

export default function Testimonials() {
  // Parallax background
  const bgRef = useParallax(0.2);

  // Header animation ref ✅ FIX
  const headerRef = useScrollAnimation();

  return (
    <section
      id="testimonials"
      className="relative isolate py-28 overflow-hidden"
    >
      {/* BACKGROUND LAYER */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center scale-110 will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* OVERLAY LAYER */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/60 via-white/70 to-white/90" />

      {/* CONTENT LAYER */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div
          ref={headerRef}
          className="text-center mb-16 animate-fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const cardRef = useScrollAnimation(index * 180);

            return (
              <div
                key={index}
                ref={cardRef}
                className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl animate-card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500 fill-current"
                      size={20}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  “{testimonial.text}”
                </p>

                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
