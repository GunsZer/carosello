import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: ''
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservation" className="section-padding bg-cream" ref={ref}>
      <motion.div 
        className="container mx-auto container-padding"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Réserver une Table</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de personnes *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i + 1 === 1 ? 'personne' : 'personnes'}</option>
                  ))}
                  <option value="9+">9+ personnes (nous contacter)</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Heure *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Sélectionner une heure</option>
                  {/* Midi */}
                  {['11:30', '12:00', '12:30', '13:00', '13:30'].map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                  {/* Soir */}
                  {['18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                  Occasion spéciale
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="">Sélectionner une occasion</option>
                  <option value="anniversary">Anniversaire</option>
                  <option value="business">Repas d'affaires</option>
                  <option value="date">Dîner en amoureux</option>
                  <option value="celebration">Célébration</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message ou demandes spéciales
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brick focus:border-transparent"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                variant="primary"
                className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Confirmer la réservation
              </Button>
            </div>

            <p className="mt-4 text-sm text-gray-500 text-center">
              * Champs obligatoires
            </p>
          </motion.form>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-playfair text-xl font-semibold text-brick mb-4">Informations importantes</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Les réservations sont confirmées par email dans les 30 minutes</li>
              <li>• Pour les groupes de plus de 8 personnes, veuillez nous contacter par téléphone</li>
              <li>• Un acompte peut être demandé pour les grandes tables</li>
              <li>• En cas d'annulation, merci de nous prévenir au moins 24h à l'avance</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Reservation;