import { CheckCircle } from 'lucide-react';
import { benefits } from '../data/benefits';
import useScrollAnimation from '../utils/useScrollAnimation';

export default function About() {
  const leftRef = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-gradient-to-b from-white to-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders in professional gypsum plastering services with experienced and skilled labour
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div ref={leftRef} className="animate-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-gray-900">
                SK Gypsum Plastering
              </span>{' '}
              delivers professional gypsum plastering services for residential and
              commercial projects, backed by experienced and skilled labour.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over <span className="font-semibold">10+ years of experience</span>,
              our team of skilled labourers is known for clean execution, smooth finishes,
              and the use of premium materials.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every project is handled by experienced professionals and skilled labour,
              ensuring timely completion, attention to detail, and complete customer satisfaction.
            </p>
          </div>

          {/* RIGHT BENEFITS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const ref = useScrollAnimation(index * 120);

              return (
                <div
                  key={index}
                  ref={ref}
                  className="flex items-start space-x-3 bg-white p-5 rounded-xl shadow-sm animate-benefit"
                >
                  <CheckCircle
                    className="text-[#8B5A5F] flex-shrink-0 mt-1"
                    size={22}
                  />
                  <span className="text-gray-700 font-medium leading-snug">
                    {benefit}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
