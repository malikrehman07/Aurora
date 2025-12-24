'use client';
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import ConsultationModal from './ConsultationModal/page';


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="relative w-full h-[700px]" >
        <Image
          src="https://res.cloudinary.com/djpvxvokp/image/upload/v1760260260/Aurora-Hero_baqmdj.webp"
          alt="charity"
          fill
          className="object-cover"
          quality={85}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className=" text-white p-6 rounded-lg max-w-1xl text-center">
            <h1 className="text-5xl font-bold mb-4 max-w-2xl">Designing spaces that tell your story</h1>
            <h1 className="text-xl" >Elegant interiors for modern living</h1>
            <div className='my-4 space-x-2' >
              <button className='bg-[#C8A165] hover:bg-[#C5A572] text-white font-small py-3 px-5 rounded-4xl transition-all duration-300 shadow-md hover:shadow-lg' >View Portfolio</button>
              <button onClick={() => setIsModalOpen(true)} className='bg-[#C8A165] hover:bg-[#C5A572] text-white font-small py-3 px-3 rounded-4xl transition-all duration-300 shadow-md hover:shadow-lg' >Book Consultation</button>
            </div>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div style={{ backgroundColor: '#C5A572' }} >
        <div className='container py-12 mx-auto' >
          <div className='mb-5' >
            <h1 className='text-center text-4xl font-bold' >Our Services</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5'>
            <div className='shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center bg-white' >
              <img src="https://img.icons8.com/?size=60&id=2797&format=png&color=000000" alt='home' className='my-2' />
              <h1 className='text-center text-xl font-semibold mb-2' >Residential Design</h1>
              <p className='text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center bg-white' >
              <img src="https://img.icons8.com/?size=60&id=10516&format=png&color=000000" alt='home' className='my-2' />
              <h1 className='text-center text-xl font-semibold mb-2' >Office Interior</h1>
              <p className='text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center bg-white' >
              <img src="https://img.icons8.com/?size=60&id=PjY5a4n6CoxP&format=png&color=000000" alt='home' className='my-2' />
              <h1 className='text-center text-xl font-semibold mb-2' >Renovation & Styling</h1>
              <p className='text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center bg-white' >
              <img src="https://img.icons8.com/?size=60&id=2797&format=png&color=000000" alt='home' className='my-2' />
              <h1 className='text-center text-xl font-semibold mb-2' >Modular Interior</h1>
              <p className='text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#ededed' }} >
        <div className='container py-12 mx-auto'>
          <div className='mb-5' >
            <h1 className='text-center text-4xl font-bold' >Featured Products</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="relative w-full h-56">
                <Image src="https://www.marthastewart.com/thmb/lxfu2-95SWCS0jwciHs1mkbsGUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-living-rooms-wb-1-bc45b0dc70e541f0ba40364ae6bd8421.jpg" alt='Living Room' fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" priority />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold mb-2">LIVING ROOM</h3>
                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet.</p>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-black hover:text-gray-700" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="relative w-full h-56">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZm_hFXOus0Jh8xt1eaAaMUo54FLuooVa_nA&s" alt='Living Room' fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" priority />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold mb-2">HOME OFFICE</h3>
                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet.</p>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-black hover:text-gray-700" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="relative w-full h-56">
                <Image src="https://marbella1.es/cdn/shop/articles/what-luxury-villas-will-be-ready-in-2025.png?v=1734251278&width=1600" alt='Living Room' fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" priority />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold mb-2">LUXURY VILLAS</h3>
                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet.</p>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-black hover:text-gray-700" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="relative w-full h-56">
                <Image src="https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg" alt='Living Room' fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" priority />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold mb-2">MODULAR INTERIORS</h3>
                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet.</p>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-black hover:text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#C5A572" }}>
        <div className="container py-12 mx-auto px-5">
          <div className="mb-10">
            <h1 className="text-center text-4xl font-bold">
              Testimonials
            </h1>
          </div>

          {/* ✅ Responsive layout: Image first on small, side-by-side on large */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Text Section */}
            <div className="flex-1 text-left lg:text-left">
              <h1 className="text-5xl font-extrabold leading-tight mb-4" style={{ lineHeight: "1.2" }}>
                &quot;Aurora Home Interiors
                <br />
                Transformed Our House
                <br />
                Into A Dream Home.&quot;
              </h1>
              <h2 className="text-md font-semibold text-white">Verified Customer: Jake Milson</h2>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center py-10 ">
              <div className="group relative w-80 h-80 rounded-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
                <Image src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80" alt="Customer" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 25vw" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2" >
        {/* Left Image Section */}
        <div className="relative w-full h-[300px] md:h-auto">
          <Image
            src="https://decormatters-blog-uploads.s3.amazonaws.com/studiomkn_5ea0ab73a3.jpg"
            alt="Interior Design"
            fill
            className="object-cover"

            priority
          />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center px-6 py-10 bg-white">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Get a Quote</h1>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A572] outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A572] outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input type="tel" placeholder="+92 300 1234567" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A572] outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea rows="4" placeholder="Tell us about your project..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A572] outline-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#C5A572] text-white py-3 rounded-lg font-semibold hover:bg-[#a47c44] transition-all duration-300">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home