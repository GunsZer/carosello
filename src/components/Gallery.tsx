import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { galleryImages } from '../data/gallery';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = filter 
    ? galleryImages.filter(image => image.category === filter)
    : galleryImages;

  const filterOptions = [
    { value: null, label: 'Tous' },
    { value: 'food', label: 'Cuisine' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'drinks', label: 'Boissons' },
    { value: 'team', label: 'Équipe' },
    { value: 'events', label: 'Événements' }
  ];

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Notre Galerie</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 mt-8">
          {filterOptions.map((option) => (
            <button
              key={option.label}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === option.value 
                  ? 'bg-brick text-white' 
                  : 'bg-cream text-charcoal hover:bg-brick hover:text-white'
              }`}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:shadow-lg hover:-translate-y-1`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Instagram Link */}
        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-brick hover:text-opacity-80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Suivez-nous sur Instagram pour plus de photos
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 text-white bg-brick rounded-full p-1 z-10"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <motion.img 
                src={galleryImages.find(img => img.id === selectedImage)?.src} 
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="w-full rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <p className="text-white text-center mt-4">
                {galleryImages.find(img => img.id === selectedImage)?.alt}
              </p>
              
              <div className="flex justify-between mt-4">
                <button 
                  className="text-white bg-brick bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                    setSelectedImage(galleryImages[prevIndex].id);
                  }}
                >
                  Précédent
                </button>
                <button 
                  className="text-white bg-brick bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                    const nextIndex = (currentIndex + 1) % galleryImages.length;
                    setSelectedImage(galleryImages[nextIndex].id);
                  }}
                >
                  Suivant
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;