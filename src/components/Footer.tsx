import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1b23] text-white py-6">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-sm text-gray-400">
          © {currentYear}{" - Made by "}
          <a href="https://discord.gg/uSzVKXjB" target="_blank" rel="noopener noreferrer" className="text-[#7000ff] hover:text-[#8929ff] transition-colors font-semibold">
            Ultra Times
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
