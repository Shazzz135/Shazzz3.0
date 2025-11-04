import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-4 flex justify-center items-center">
      <span className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Shazzz3. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
