import useScrollAnimation from '../utils/useScrollAnimation';

const galleryImages = [
  {
    src: '/1.jpg',
    title: 'Living Room Gypsum Finish',
  },
  {
    src: '/2.jpg',
    title: 'Bedroom Ceiling Design',
  },
  {
    src: '/3.jpg',
    title: 'Commercial Office Plastering',
  },
  {
    src: '/4.jpg',
    title: 'Modern False Ceiling',
  },
  {
    src: '/5.jpg',
    title: 'Smooth Wall Finish',
  },
  {
    src: '/6.jpg',
    title: 'Interior Renovation',
  },
  {
    src: '/7.png',
    title: 'Test',
  },
  {
    src: '/8.png',
    title: 'Test',
  },
  {
    src: '/9.png',
    title: 'Test',
  },
];

export default function Gallery() {
  const ref = useScrollAnimation();

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse of our recent gypsum plastering and interior finishing projects
          </p>
        </div>

        {/* GALLERY GRID */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up"
        >
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
