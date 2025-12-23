import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">FitnessClub</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#hero" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link href="#transformations" className="text-gray-600 hover:text-gray-800">Transformations</Link>
          <Link href="#services" className="text-gray-600 hover:text-gray-800">Services</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </nav>
        <button className="md:hidden">Menu</button> {/* Add mobile menu later */}
      </div>
    </header>
  );
}