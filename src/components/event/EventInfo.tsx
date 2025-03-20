import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { formatDate } from '../../utils/dateHelpers';

interface EventInfoProps {
  date: string;
  location: string;
}

export const EventInfo: React.FC<EventInfoProps> = ({ date, location }) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
      <div className="flex items-center text-gray-600">
        <Calendar className="w-5 h-5 mr-2 text-[#7000ff]" />
        <span>{formatDate(date)}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-5 h-5 mr-2 text-[#7000ff]" />
        <span>{location}</span>
      </div>
    </div>
  );
}; 