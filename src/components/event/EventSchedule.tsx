import React from 'react';
import { Clock } from 'lucide-react';

interface ScheduleItem {
  time: string;
  activity: string;
}

interface EventScheduleProps {
  schedule: ScheduleItem[];
}

export const EventSchedule: React.FC<EventScheduleProps> = ({ schedule }) => {
  if (!schedule?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Event Schedule</h2>
      <div className="space-y-4">
        {schedule.map((item, index) => (
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
  );
}; 