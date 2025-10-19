"use client";
import React, { useState } from "react";
import Image from "next/image";
import ConsultationModal from "../ConsultationModal/page";

const about = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function to open modal
  const openModal = () => setIsModalOpen(true);
  // function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#ededed] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#b58b52]">
            About Aurora
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Aurora Home Interiors, we blend timeless elegance with
            contemporary design to create spaces that reflect your personality.
            From luxurious living rooms to bespoke kitchens, our design process
            focuses on functionality, comfort, and beauty.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our expert team of designers and craftsmen work closely with you to
            bring your vision to life — one detail at a time. Experience design
            that truly feels like home.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-[#b58b52] text-white font-medium rounded-lg hover:bg-[#a1783d] transition"
            onClick={openModal}
          >
            Book Consultation
          </button>
        </div>
        <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
            alt="About Aurora"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
