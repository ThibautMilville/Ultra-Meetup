import React from 'react';
import { ExternalLink } from 'lucide-react';

interface RegistrationButtonProps {
  registrationLink: string;
}

export const RegistrationButton: React.FC<RegistrationButtonProps> = ({ registrationLink }) => {
  return (
    <div className="flex justify-center pt-4">
      <a
        href={registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-[#7000ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8929ff] transition-all transform hover:scale-105 active:scale-95"
      >
        Register for Event
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
}; 