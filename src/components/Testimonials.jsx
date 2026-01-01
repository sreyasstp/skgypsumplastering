import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="card">
            <div className="flex mb-3">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="text-yellow-500 fill-current" />
              ))}
            </div>
            <p>"{t.text}"</p>
            <strong>{t.name}</strong>
            <span className="text-sm">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
