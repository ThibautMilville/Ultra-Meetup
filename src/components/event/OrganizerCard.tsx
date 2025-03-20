import React from 'react';

interface Organizer {
  name: string;
  role: string;
  description: string;
}

interface OrganizerCardProps {
  organizer: Organizer;
}

export const OrganizerCard: React.FC<OrganizerCardProps> = ({ organizer }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Organizer</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {organizer.name}
        </h3>
        <p className="text-[#7000ff] font-medium mb-3">{organizer.role}</p>
        <p className="text-gray-600">{organizer.description}</p>
      </div>
    </div>
  );
}; 