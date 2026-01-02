import { services } from '../data/services';
import useScrollAnimation from '../utils/useScrollAnimation';

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-neutral-50 to-[#E5D5D0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plastering solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ref = useScrollAnimation(index * 150); // stagger delay

            return (
              <div
                key={index}
                ref={ref}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 animate-card"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
