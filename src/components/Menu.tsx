import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { menuCategories } from '../data/menu';
import Button from './ui/Button';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="menu" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Notre Carte</h2>
        
        <div className={`mt-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Menu Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-brick text-white' 
                    : 'bg-cream text-charcoal hover:bg-brick hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {menuCategories
              .find(category => category.id === activeCategory)?.items
              .map((item) => (
                <div 
                  key={item.id} 
                  className="bg-cream p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex justify-between">
                    <h3 className="font-playfair text-xl font-semibold text-brick">
                      {item.name}
                      {item.isSpecial && (
                        <span className="ml-2 text-sm bg-brick text-white px-2 py-1 rounded-full">
                          Spécialité
                        </span>
                      )}
                    </h3>
                    <span className="font-medium text-lg">{item.price} CHF</span>
                  </div>
                  <p className="mt-2 text-charcoal">{item.description}</p>
                  {item.allergens.length > 0 && (
                    <p className="mt-2 text-sm text-gray-500 italic">
                      Allergènes: {item.allergens.join(', ')}
                    </p>
                  )}
                </div>
              ))
            }
          </div>
          
          {/* Download Menu Button */}
          <div className="flex justify-center mt-12">
            <Button 
              href="/menu.pdf" 
              variant="primary"
              className="flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Télécharger le menu complet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;