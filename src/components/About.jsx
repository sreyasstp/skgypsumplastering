import { CheckCircle } from 'lucide-react';
import { benefits } from '../data/benefits';

export default function About() {
  return (
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
  );
}
