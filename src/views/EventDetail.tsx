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
          className="mb-6 flex items-center text-[#7000ff] hover:text-[#8929ff] transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Events
        </button>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-t-xl overflow-hidden shadow-lg"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            {event.isPast && (
              <div className="absolute top-4 right-4 bg-black/80 text-white px-6 py-2 rounded-full z-20 backdrop-blur-sm font-medium tracking-wide">
                Past Event
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-b-xl shadow-lg p-8 space-y-10"
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{event.title}</h1>
              
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-[#7000ff]" />
                  <span className="font-medium">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-[#7000ff]" />
                  <span className="font-medium">{event.location}</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.longDescription || event.description}
                </p>
              </div>
            </div>

            {event.schedule && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Event Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#7000ff]" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 tracking-tight text-lg mb-1">{item.time}</div>
                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">{item.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">About the Organizer</h2>
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
                  {event.organizer.name}
                </h3>
                <p className="text-[#7000ff] font-semibold mb-4 tracking-wide">{event.organizer.role}</p>
                <p className="text-gray-700 leading-relaxed">{event.organizer.description}</p>
              </div>
            </div>

            {!event.isPast && event.registrationLink && (
              <div className="flex justify-center pt-6">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#7000ff] text-white px-10 py-4 rounded-lg font-bold tracking-wide hover:bg-[#8929ff] transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
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