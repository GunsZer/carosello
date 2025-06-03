import React from 'react';
import { useInView } from 'react-intersection-observer';
import { reviews } from '../data/reviews';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews: React.FC = () => {
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
    autoplaySpeed: 6000,
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

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section id="reviews" className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Avis de nos Clients</h2>
        
        <div className={`mt-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Slider {...sliderSettings}>
            {reviews.map((review) => (
              <div key={review.id} className="px-3">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-lg">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                      via {review.source}
                    </span>
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-charcoal italic">"{review.text}"</p>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Social Media Links */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="font-playfair text-xl font-semibold text-center mb-6">Suivez-nous sur les réseaux sociaux</h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-brick hover:text-opacity-80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-brick hover:text-opacity-80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-brick hover:text-opacity-80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Google</span>
              </a>
              
              <a 
                href="https://www.tripadvisor.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-brick hover:text-opacity-80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                </svg>
                <span>TripAdvisor</span>
              </a>
              
              <a 
                href="https://www.thefork.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-brick hover:text-opacity-80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5h18M3 12h18M3 19h18M8 6l4 6 4-6M8 18l4-6 4 6"></path>
                </svg>
                <span>TheFork</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;