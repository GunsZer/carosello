import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import Button from './ui/Button';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream bg-opacity-95 shadow-lg py-2' : 'bg-charcoal bg-opacity-60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className={`font-playfair text-2xl font-bold italic ${scrolled ? 'text-brick' : 'text-white'}`}>
              Il Carosello
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className={`hover:text-brick font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>Accueil</a>
            <a href="#about" className={`hover:text-brick font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>À propos</a>
            <a href="#menu" className={`hover:text-brick font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>Carte & Menu</a>
            <a href="#drinks" className={`hover:text-brick font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>Boissons & Vins</a>
            <a href="#gallery" className={`hover:text-brick font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>Galerie</a>
            <a href="#reviews" className={`hover:text-brick font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>Avis</a>
            <a href="#contact" className={`hover:text-brick font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>Contact</a>
            <Button 
              href="#reservation" 
              variant="primary" 
              className="ml-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Réserver
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-white'}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-charcoal hover:text-brick font-medium py-2 transition-colors">Accueil</a>
              <a href="#about" className="text-charcoal hover:text-brick font-medium py-2 transition-colors">À propos</a>
              <a href="#menu" className="text-charcoal hover:text-brick font-medium py-2 transition-colors">Carte & Menu</a>
              <a href="#drinks" className="text-charcoal hover:text-brick font-medium py-2 transition-colors">Boissons & Vins</a>
              <a href="#gallery" className="text-charcoal hover:text-brick font-medium py-2 transition-colors">Galerie</a>
              <a href="#reviews" className="text-charcoal hover:text-brick font-medium py-2 transition-colors">Avis</a>
              <a href="#contact" className="text-charcoal hover:text-brick font-medium py-2 transition-colors">Contact</a>
              <Button 
                href="#reservation" 
                variant="primary"
                onClick={toggleMobileMenu}
                className="w-full shadow-lg"
              >
                Réserver
              </Button>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg p-4 mt-6 shadow-sm">
              <div className="flex items-center mb-3">
                <Clock className="text-brick w-5 h-5 mr-3" />
                <div>
                  <h4 className="font-medium">Horaires d'ouverture</h4>
                  <p className="text-sm text-gray-600">
                    Lundi - Samedi:<br />
                    10h00–14h00<br />
                    18h00–23h00<br />
                    <span className="text-brick">Dimanche: Fermé</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <MapPin className="text-brick w-5 h-5 mr-3" />
                <div>
                  <h4 className="font-medium">Adresse</h4>
                  <a 
                    href="https://maps.google.com/?q=Boulevard+Georges‐Favon+25,+1204+Genève,+Suisse"
                    className="text-sm text-gray-600 hover:text-brick"
                  >
                    Boulevard Georges‐Favon 25<br />
                    1204 Genève, Suisse
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-brick w-5 h-5 mr-3" />
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <a 
                    href="tel:+41223285640"
                    className="text-sm text-gray-600 hover:text-brick"
                  >
                    +41 22 328 56 40
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;