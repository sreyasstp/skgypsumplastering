import { useEffect, useState } from 'react';

/* Background images */
const bgImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=2000&q=80',
];

function AnimatedBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bgImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center
            transition-opacity transition-transform
            duration-[2500ms] ease-in-out
            ${i === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}
          `}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* MOTION BACKGROUND */}
      <AnimatedBackground />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-white/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/55 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smooth Walls.<br />
              <span className="text-[#8B5A5F]">Perfect Finish.</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-xl mb-10 leading-relaxed">
              Premium gypsum plastering for homes and commercial spaces with
              clean workmanship and lasting quality.
            </p>

            {/* BUTTONS – FIXED */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#8B5A5F] text-white px-9 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#73494D] transition">
                Get Free Quote
              </button>

              <button className="w-full sm:w-auto px-9 py-4 rounded-xl border border-[#8B5A5F] text-[#8B5A5F] font-semibold hover:bg-[#8B5A5F] hover:text-white transition">
                Our Services
              </button>
            </div>
          </div>

          {/* RIGHT – LOGO */}
          <div className="relative">
            <img
              src="/logo_convertes.png"
              alt="SK Gypsum Plastering"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
