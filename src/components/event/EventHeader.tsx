import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface EventHeaderProps {
  title: string;
  imageUrl: string;
  isPast: boolean;
  onBack: () => void;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  title,
  imageUrl,
  isPast,
  onBack,
}) => {
  return (
    <>
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-[#7000ff] hover:text-[#8929ff] transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[400px] rounded-t-xl overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isPast && (
          <div className="absolute top-4 right-4 bg-black/80 text-white px-6 py-2 rounded-full z-20 backdrop-blur-sm">
            Past Event
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-b-xl shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      </motion.div>
    </>
  );
}; 