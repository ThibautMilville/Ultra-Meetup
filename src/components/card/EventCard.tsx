import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Event } from "../../types";

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/event/${event.id}`}>
        <div className="relative h-48 overflow-hidden">
          <div
            className={`absolute inset-0 ${
              event.isPast ? "bg-black/40" : ""
            } z-10 transition-all duration-300`}
          />
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 image-rendering-crisp"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              backfaceVisibility: "hidden",
            }}
          />
          {event.isPast && (
            <div className="absolute top-4 right-4 bg-black/80 text-white px-6 py-2 rounded-full z-20 backdrop-blur-sm">
              Past Event
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#7000ff] transition-colors">
              {event.title}
            </h3>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <Calendar className="w-4 h-4 mr-2 text-[#7000ff]" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-[#7000ff]" />
            <span>{event.location}</span>
          </div>
          <p className="mt-4 text-gray-600 line-clamp-2">{event.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};