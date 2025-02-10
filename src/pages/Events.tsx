import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';
import { events } from '../data/events';

export const Events: React.FC = () => {
  const [displayCount, setDisplayCount] = useState(10);
  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const displayedEvents = sortedEvents.slice(0, displayCount);
  const hasMore = displayCount < events.length;

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 10, events.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7000ff] to-[#8929ff] bg-clip-text text-transparent">
              All Events
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover all our community gatherings - past and upcoming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={loadMore}
              className="bg-[#7000ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8929ff] transition-colors transform hover:scale-105 active:scale-95 duration-200"
            >
              Load More Events
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};