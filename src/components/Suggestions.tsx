import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { chefSuggestions } from '../data/menu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './ui/Button';

const Suggestions: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Les Suggestions du Chef</h2>
        
        <div className={`mt-12 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <Slider {...sliderSettings}>
            {chefSuggestions.map((item) => (
              <div key={item.id} className="px-3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-64">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                    {item.isSpecial && (
                      <div className="absolute top-4 right-4 bg-brick text-white px-3 py-1 rounded-full text-sm font-medium">
                        Spécialité
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2 text-brick">{item.name}</h3>
                    <p className="text-charcoal mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-medium">{item.price} CHF</span>
                      {item.allergens.length > 0 && (
                        <span className="text-sm text-gray-500 italic">
                          Allergènes: {item.allergens.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
          <div className="text-center mt-10">
            <Button href="#menu" variant="secondary">
              Voir la carte complète
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;