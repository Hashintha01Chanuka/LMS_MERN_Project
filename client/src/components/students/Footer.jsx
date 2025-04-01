import React from 'react'
import { assets } from '../../assets/assets'
import footerlogo from '../../assets/footerlogo.png'
import footerName from '../../assets/footerName.png'


const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-between gap-10 md:gap-20 py-10 border-b border-white/30">
        
        {/* Logo & Description */}
        <div className="flex flex-col md:items-start items-center w-64">
        <div className="flex items-center gap-2">
  <img src={footerlogo} alt="MindUp Logo" className="w-10 h-auto" />
  <img src={footerName} alt="MindUp Text Logo" className="w-24 h-auto" />
</div>

          <p className="mt-6 text-center md:text-left text-sm text-white/80 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
  
        {/* Company Links */}
        <div className="flex flex-col md:items-start items-center w-40">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex flex-col space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>
  
        {/* Newsletter Subscription */}
        <div className="flex flex-col items-start w-80">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4 w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border border-gray-600 bg-gray-800 text-gray-300 placeholder-gray-500 outline-none w-full h-10 rounded px-3 text-sm"
            />
            <button className="bg-green-600 px-4 h-10 text-white rounded text-sm hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>
        
      </div>
  
      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © Edemy. All Rights Reserved.
      </p>
    </footer>
  );
  
}

export default Footer
