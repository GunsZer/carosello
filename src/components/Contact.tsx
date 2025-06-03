import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Contact & Réservations</h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Contact Information */}
          <div className="bg-cream rounded-lg shadow-md p-6">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-brick">Informations Pratiques</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-brick w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Adresse</h4>
                  <p className="mt-1">
                    <a 
                      href="https://maps.google.com/?q=Boulevard+Georges‐Favon+25,+1204+Genève,+Suisse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brick transition-colors"
                    >
                      Boulevard Georges‐Favon 25<br />
                      1204 Genève, Suisse
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-brick w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Téléphone</h4>
                  <p className="mt-1">
                    <a 
                      href="tel:+41223285640" 
                      className="hover:text-brick transition-colors"
                    >
                      +41 22 328 56 40
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-brick w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="mt-1">
                    <a 
                      href="mailto:carosello25@gmail.com" 
                      className="hover:text-brick transition-colors"
                    >
                      carosello25@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-brick w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Horaires d'ouverture</h4>
                  <p className="mt-1">
                    Du lundi au samedi:<br />
                    10h00–14h00 et 18h00–23h00<br />
                    <span className="text-brick font-medium">Dimanche: Fermé</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Réservation</h4>
              <Button 
                href="#reservation" 
                variant="primary"
                className="w-full"
              >
                Réserver une table
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                Pour les groupes de plus de 8 personnes, veuillez nous contacter par téléphone.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6 text-brick">Contactez-nous</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                <strong className="font-bold">Merci pour votre message !</strong>
                <p className="block sm:inline"> Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary"
                  className="w-full"
                >
                  {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
              </form>
            )}
          </div>
        </div>
        
        {/* Google Maps */}
        <div className={`mt-12 rounded-lg overflow-hidden shadow-md h-96 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.3701746465595!2d6.1414921!3d46.2012349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65244c58f6a1%3A0x6485611bd9967e91!2sBoulevard%20Georges-Favon%2025%2C%201204%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1665402122387!5m2!1sfr!2sch" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Il Carosello"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;