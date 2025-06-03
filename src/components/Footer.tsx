import React from 'react';
import { Facebook, Instagram, Map, Star, UtensilsCrossed } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Il Carosello</h3>
            <p className="mb-4 text-gray-300">
              Restaurant italien authentique à Genève, proposant des pâtes fraîches, pizzas au feu de bois
              et spécialités régionales dans une ambiance chaleureuse et conviviale.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brick transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brick transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brick transition-colors">
                <Star size={20} />
              </a>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brick transition-colors">
                <Map size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">À propos</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors">Carte & Menu</a>
              </li>
              <li>
                <a href="#drinks" className="text-gray-300 hover:text-white transition-colors">Boissons & Vins</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Galerie</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Avis</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Boulevard Georges‐Favon 25</p>
              <p>1204 Genève, Suisse</p>
              <p>
                <a href="tel:+41223285640" className="hover:text-white transition-colors">
                  +41 22 328 56 40
                </a>
              </p>
              <p>
                <a href="mailto:carosello25@gmail.com" className="hover:text-white transition-colors">
                  carosello25@gmail.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Horaires</h3>
            <table className="text-gray-300 w-full">
              <tbody>
                <tr>
                  <td className="py-1">Lundi - Samedi:</td>
                  <td className="py-1">10h00–14h00</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="py-1">18h00–23h00</td>
                </tr>
                <tr>
                  <td className="py-1">Dimanche:</td>
                  <td className="py-1 text-brick">Fermé</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <UtensilsCrossed size={14} className="mr-1" /> Cartes de crédit acceptées
              </span>
              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                  <circle cx="12" cy="20" r="1"></circle>
                </svg>
                WiFi gratuit
              </span>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Il Carosello – Tous droits réservés
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;