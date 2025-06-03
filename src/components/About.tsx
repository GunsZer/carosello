import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <h2 className="section-title">À Propos de Nous</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-brick">Notre Histoire</h3>
            <p className="mb-4">
              Il Carosello à Genève, le meilleur de l'Italie dans votre assiette. Notre cuisine est riche et variée, 
              comme les goûts de nos clients toujours plus nombreux. Il Carosello, c'est aussi la gastronomie à 
              portée de toutes les bourses.
            </p>
            <p className="mb-4">
              Fondé par la famille Rossi en 1995, notre restaurant perpétue les traditions culinaires italiennes 
              avec passion et authenticité. Chaque plat raconte une histoire, celle de nos racines profondes 
              dans les diverses régions d'Italie.
            </p>
            <p>
              Nos ingrédients sont soigneusement sélectionnés et importés directement d'Italie pour vous offrir 
              une expérience gastronomique authentique. Notre chef, Marco Bianchi, met tout son savoir-faire 
              au service de votre plaisir gustatif.
            </p>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-full">
              <img 
                src="/public/ilcarosello.webp" 
                alt="L'équipe d'Il Carosello en cuisine" 
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brick bg-opacity-90 p-4 md:p-6 rounded-b-lg">
                <p className="text-white font-medium text-lg">
                  "La vraie cuisine italienne est celle qui raconte une histoire familiale."
                </p>
                <p className="text-white italic mt-2">- Chef Marco Bianchi</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`bg-cream p-6 rounded-lg shadow-md text-center transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="font-bold text-3xl text-brick mb-2">25+</div>
            <p>Années d'expérience</p>
          </div>
          
          <div className={`bg-cream p-6 rounded-lg shadow-md text-center transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="font-bold text-3xl text-brick mb-2">50+</div>
            <p>Recettes authentiques</p>
          </div>
          
          <div className={`bg-cream p-6 rounded-lg shadow-md text-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="font-bold text-3xl text-brick mb-2">100%</div>
            <p>Ingrédients importés d'Italie</p>
          </div>
          
          <div className={`bg-cream p-6 rounded-lg shadow-md text-center transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="font-bold text-3xl text-brick mb-2">4.8</div>
            <p>Note moyenne des clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;