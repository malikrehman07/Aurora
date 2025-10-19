'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import ConsultationModal from '../../ConsultationModal/page'

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50' >
            <nav className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-3xl font-bold text-[#b58b52] " >Aurora</Link>
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex">
                            <ul className="flex space-x-8">
                                <li>
                                    <Link href="/" className="text-black-700 hover:text-[#b58b52] transition-colors">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-black-700 hover:text-[#b58b52] transition-colors">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-black-700 hover:text-[#b58b52] transition-colors">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Login Button */}
                        <div className="hidden md:flex">
                            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 text-white rounded-4xl bg-[#C8A165] hover:bg-[#b58b52] transition-colors">Book Consultation</button>
                        </div>
                        

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className="text-black-700 hover:text-[#b58b52] focus:outline-none text-2xl"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
                        <ul className="flex flex-col space-y-2 px-4 py-3">
                            <li>
                                <Link href="/" className="block text-black-700 hover:text-[#b58b52] transition-colors" onClick={() => setIsMobileOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="block text-black-700 hover:text-[#b58b52] transition-colors" onClick={() => setIsMobileOpen(false)}>About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block text-black-700 hover:text-[#b58b52] transition-colors" onClick={() => setIsMobileOpen(false)}>Contact</Link>
                            </li>
                            <li>
                                <button type="button" className="block px-4 py-2 text-white rounded-4xl text-center bg-[#C8A165] hover:bg-[#b58b52] transition-colors" onClick={() => { setIsMobileOpen(false); setIsModalOpen(true); }}>Book Consultation</button>
                            </li>
                        </ul>
                    </div>
                )}
                {/* Render modal from header so header button can open it */}
                <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </nav>
        </header>
    );
}

export default Header
