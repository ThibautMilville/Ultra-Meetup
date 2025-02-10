import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="bg-[#1a1b23] text-white">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="../../assets/favicon.ico"
              alt="Ultra"
              className="h-8 w-auto mr-2"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#7000ff] to-[#8929ff] bg-clip-text text-transparent">
              Ultra&nbsp;
            </span>
            <span className="text-2xl font-bold text-white bg-clip-text text-transparent">
              Meetup
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-[#7000ff] transition-colors">
              Home
            </Link>
            <Link
              to="/events"
              className="hover:text-[#7000ff] transition-colors"
            >
              Events
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
