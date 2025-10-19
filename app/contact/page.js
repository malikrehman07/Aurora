"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#C5A572]">
            Get in Touch
          </h1>
          <p className="text-gray-700 mb-6">
            Have a project in mind or want to learn more about our design
            services? We’d love to hear from you.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>📍 123 Design Street, Lahore, Pakistan</li>
            <li>📞 +92 300 123 4567</li>
            <li>✉️ support@auroradesigns.com</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="bg-[#ededed] p-8 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#C5A572]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#C5A572]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#C5A572]"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-[#C5A572] text-white font-semibold rounded-lg hover:bg-[#a1783d] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
