import { CheckCircle } from 'lucide-react';
import { benefits } from '../data/benefits';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About SK Gypsum Plastering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders in professional plastering services with a commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              With over a decade of experience in the plastering industry, SK Gypsum Plastering
              has built a strong reputation for delivering superior workmanship across residential
              and commercial projects.
            </p>
            <p>
              Our skilled team uses premium-grade materials and modern techniques to ensure
              flawless finishes, durability, and long-term value.
            </p>
            <p>
              Whether it’s a small repair or a full-scale project, we approach every job with
              precision, professionalism, and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-neutral-50 p-4 rounded-lg"
              >
                <CheckCircle className="text-[#8B5A5F] mt-1" size={20} />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
