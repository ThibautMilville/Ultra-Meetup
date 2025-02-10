import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';
import { events } from '../data/events';

export const PastEvents: React.FC = () => {
  const pastEvents = events.filter(event => event.isPast);

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Past Ultra Events
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Relive our previous community gatherings and memorable moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};