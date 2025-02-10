import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { events } from '../data/events';

export const EventDetail: React.FC = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return <Navigate to="/" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-96"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            {event.isPast && (
              <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-6 py-2 rounded-lg">
                Past Event
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{event.title}</h1>
            
            <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
              <div className="flex items-center text-gray-600 mb-4 md:mb-0">
                <Calendar className="w-5 h-5 mr-2 text-[#7000ff]" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-[#7000ff]" />
                <span>{event.location}</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>

            {!event.isPast && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-[#7000ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8929ff] transition-colors"
              >
                Register for Event
              </motion.button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};