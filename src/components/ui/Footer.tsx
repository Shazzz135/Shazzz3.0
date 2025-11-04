import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-800 py-4 flex justify-center items-center" style={{ backgroundColor: 'transparent' }}>
      <span className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Shazzz3. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
