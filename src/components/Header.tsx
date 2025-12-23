'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-secondary">FitnessClub</div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#hero" className="text-white hover:text-secondary transition-colors">Home</Link>
          <Link href="#transformations" className="text-white hover:text-secondary transition-colors">Transformations</Link>
          <Link href="#services" className="text-white hover:text-secondary transition-colors">Services</Link>
          <Link href="#about" className="text-white hover:text-secondary transition-colors">About</Link>
          <Link href="#contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link href="#hero" className="text-white hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#transformations" className="text-white hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Transformations</Link>
            <Link href="#services" className="text-white hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#about" className="text-white hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#contact" className="text-white hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}