'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-primary-900">FitnessClub</div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#hero" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium">Home</Link>
          <Link href="#transformations" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium">Transformations</Link>
          <Link href="#services" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium">Services</Link>
          <Link href="#about" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium">About</Link>
          <Link href="#contact" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium">Contact</Link>
        </nav>
        <button
          className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 py-4 shadow-soft">
          <nav className="flex flex-col space-y-4 px-6">
            <Link href="#hero" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#transformations" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Transformations</Link>
            <Link href="#services" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#about" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#contact" className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}