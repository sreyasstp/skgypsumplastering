export default function Hero({ scroll }) {
    return (
      <section id="home" className="pt-20 bg-gradient-to-br from-[#E5D5D0] to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-6xl font-bold mb-6">
              The Ultimate Plastering Solution
            </h1>
            <p className="text-xl mb-8">
              Transform your spaces with expert gypsum plastering services.
            </p>
            <div className="flex gap-4">
              <button onClick={() => scroll('contact')} className="btn-primary">
                Get Free Quote
              </button>
              <button onClick={() => scroll('services')} className="btn-outline">
                Our Services
              </button>
            </div>
          </div>
  
          <img src="/logo_convertes.png" className="rounded-2xl shadow-xl" />
        </div>
      </section>
    );
  }
  