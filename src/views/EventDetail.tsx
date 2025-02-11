import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowLeft, Clock, ExternalLink } from 'lucide-react';
import { events } from '../data/events';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const EventDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <Breadcrumbs eventTitle={event.title} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-[#7000ff] hover:text-[#8929ff] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-t-xl overflow-hidden"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            {event.isPast && (
              <div className="absolute top-4 right-4 bg-black/80 text-white px-6 py-2 rounded-full z-20 backdrop-blur-sm">
                Past Event
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-b-xl shadow-lg p-8 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">{event.title}</h1>
              
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-[#7000ff]" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-[#7000ff]" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {event.longDescription || event.description}
                </p>
              </div>
            </div>

            {event.schedule && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Event Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-[#7000ff] mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">{item.time}</div>
                        <div className="text-gray-600 whitespace-pre-line">{item.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Organizer</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.organizer.name}
                </h3>
                <p className="text-[#7000ff] font-medium mb-3">{event.organizer.role}</p>
                <p className="text-gray-600">{event.organizer.description}</p>
              </div>
            </div>

            {!event.isPast && event.registrationLink && (
              <div className="flex justify-center pt-4">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#7000ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8929ff] transition-all transform hover:scale-105 active:scale-95"
                >
                  Register for Event
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};