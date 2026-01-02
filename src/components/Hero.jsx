export default function Hero({ scroll }) {
    return (
        <section
        id="home"
        className="pt-20 relative overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581093458791-9f3c3900df3c?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5D5D0]/95 via-white/90 to-white/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Ultimate<br />Plastering Solution
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
                Professional gypsum plastering for homes and commercial spaces with
                smooth finishing and long-lasting quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#8B5A5F] text-white px-8 py-4 rounded-lg hover:bg-[#73494D] transition transform hover:scale-105 font-semibold shadow-lg"
                >
                  Get Free Quote
                </button>

                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-[#8B5A5F] text-[#8B5A5F] px-8 py-4 rounded-lg hover:bg-[#8B5A5F] hover:text-white transition font-semibold"
                >
                  Our Services
                </button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '50+', label: 'Projects Done' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-[#8B5A5F]">
                      {item.value}
                    </div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative animate-fadeInRight">
              <div className="bg-[#8B5A5F] rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="/logo_convertes.png"
                  alt="SK Gypsum Plastering"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
  