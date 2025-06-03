import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { drinkCategories } from '../data/drinks';

const Drinks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(drinkCategories[0].id);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="drinks" className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Boissons & Vins</h2>
        
        <div className={`mt-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Drinks Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 overflow-x-auto pb-2">
            {drinkCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'bg-basil text-white' 
                    : 'bg-white text-charcoal hover:bg-basil hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Drink Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {drinkCategories
              .find(category => category.id === activeCategory)?.items
              .map((item) => (
                <div 
                  key={item.id} 
                  className="py-4 border-b border-gray-200 last:border-0"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-basil">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 italic mt-1">{item.origin}</p>
                      <p className="mt-2 text-charcoal">{item.description}</p>
                    </div>
                    <div className="mt-3 md:mt-0 md:ml-4 flex flex-col items-start md:items-end">
                      <div className="font-medium">
                        <span className="text-lg">{item.priceGlass} CHF</span>
                        {item.priceGlass && !item.priceBottle && <span className="text-sm"> / verre</span>}
                      </div>
                      {item.priceBottle && (
                        <div className="text-md font-medium mt-1">
                          {item.priceBottle} CHF / bouteille
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          
          {/* Wine Pairing Note */}
          {(activeCategory === 'wines-red' || activeCategory === 'wines-white' || activeCategory === 'sparkling') && (
            <div className="mt-8 bg-basil bg-opacity-10 p-6 rounded-lg border border-basil border-opacity-30">
              <h3 className="font-playfair text-xl font-semibold text-basil mb-2">Conseil de notre Sommelier</h3>
              <p>
                Nous vous proposons des accords mets-vins personnalisés. N'hésitez pas à demander conseil 
                à notre sommelier pour sublimer votre expérience culinaire avec le vin parfait.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Drinks;