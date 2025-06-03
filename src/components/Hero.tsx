import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="relative h-screen-90 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal bg-opacity-60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-lg">
            Il Carosello
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 italic font-playfair text-shadow-md">
            Le meilleur de l'Italie dans votre assiette
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="#reservation" 
              variant="primary"
              className="bg-brick text-white border-2 border-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-lg font-semibold px-8 py-4"
            >
              Réserver une table
            </Button>
            <Button
              href="#menu"
              variant="secondary"
              className="!bg-white !text-red-600 !border-red-600 border px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:!bg-white hover:!text-red-600"
            >
              Découvrir notre carte
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
