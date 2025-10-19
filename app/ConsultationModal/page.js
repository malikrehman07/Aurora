'use client'
import React, { useEffect } from 'react'

const ConsultationModal = ({ isOpen = false, onClose = () => {} }) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleBackdropClick = (e) => {
    // close when clicking on the backdrop (overlay)
    if (e.target === e.currentTarget) onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send form data
    onClose()
  }

  if (!isOpen) return null

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl w-[90vw] max-w-md p-8 relative max-h-[90vh] overflow-auto shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          aria-label="Close dialog"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-[#C5A572] mb-4 text-center">
          Book a Consultation
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Fill out the form below and our design team will reach out soon.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#C5A572]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#C5A572]"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#C5A572]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#C5A572] text-white py-2 rounded-md hover:bg-[#9d7846] transition-all"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default ConsultationModal
