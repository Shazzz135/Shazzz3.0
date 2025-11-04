import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4" style={{ backgroundColor: 'transparent' }}>
      <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
      <p className="text-lg text-gray-300 max-w-xl text-center">
        Get in touch with us for more information or inquiries.
      </p>
      {/* Add contact form or details here */}
    </section>
  );
};

export default Contact;
