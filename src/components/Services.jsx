import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
