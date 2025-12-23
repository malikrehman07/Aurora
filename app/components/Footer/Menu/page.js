"use client";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-bold text-[#C5A572] mb-4">Aurora</h1>
          <p className="text-gray-400 leading-relaxed">
            Elevating interiors with timeless elegance and craftsmanship.
            Discover designs that make every space feel like home.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-[#C5A572] transition">About Us</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#C5A572] transition">Blog</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#C5A572] transition">FAQ</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#C5A572] transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Main Menu */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Main Menu</h2>
          <ul className="space-y-2">
            <li> <Link href="/" className="hover:text-[#C5A572] transition">Home </Link> </li>
            <li> <Link href="/" className="hover:text-[#C5A572] transition">Services </Link> </li>
            <li> <Link href="/" className="hover:text-[#C5A572] transition">Projects </Link> </li>
            <li> <Link href="/contact" className="hover:text-[#C5A572] transition">Get a Quote </Link> </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">support@auroradesigns.com</p>
          <p className="text-gray-400 mb-4">+92 300 123 4567</p>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" > <Facebook color="#C5A572" size={22} />  </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" > <Twitter color="#C5A572" size={22} />  </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" > <Instagram color="#C5A572" size={22} /> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
