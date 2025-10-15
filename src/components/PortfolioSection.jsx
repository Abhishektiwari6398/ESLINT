import React, { useEffect, useState} from 'react';



const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const portfolioImages = {
    events: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      'https://images.unsplash.com/photo-1752937359241-a394addd9952?w=600',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600',
      'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600',
    ],
    models: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600',
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600',
    ],
  };

  return (
    <div id="portfolio-section" className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A glimpse into our world of luxury and excellence
          </p>
        </div>

        <div className={`flex justify-center mb-12 space-x-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {['events', 'models'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-500 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white  shadow-purple-500/50 scale-110'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:scale-105'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioImages[activeTab].map((img, idx) => (
            <div
              key={idx}
              className={`group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 hover:-translate-y-2  hover:shadow-purple-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img
                src={img}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="font-bold text-lg mb-1">Project {idx + 1}</h4>
                  <p className="text-sm text-gray-300">{activeTab === 'events' ? 'Luxury Event' : 'Model Portfolio'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;