import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Breadcrumbs: React.FC<{ eventTitle?: string }> = ({ eventTitle }) => {

  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-[#7000ff] hover:text-[#8929ff] transition-colors">
            Home
          </Link>
        </li>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <li>
          <Link to="/events" className="text-[#7000ff] hover:text-[#8929ff] transition-colors">
            Events
          </Link>
        </li>
        {eventTitle && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <span className="text-gray-600">{eventTitle}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};
