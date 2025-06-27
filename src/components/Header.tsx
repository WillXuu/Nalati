"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">那拉提·雪山居</Link>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><Link href="/" className="text-gray-600 hover:text-blue-500">首页</Link></li>
          <li><Link href="/rooms" className="text-gray-600 hover:text-blue-500">房型展示</Link></li>
          <li><Link href="/gallery" className="text-gray-600 hover:text-blue-500">风光相册</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-blue-500">我们的故事</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-blue-500">联系我们</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link href="/" className="text-gray-600 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>首页</Link></li>
            <li><Link href="/rooms" className="text-gray-600 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>房型展示</Link></li>
            <li><Link href="/gallery" className="text-gray-600 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>风光相册</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>我们的故事</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>联系我们</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 