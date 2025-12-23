export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">FitnessClub</h3>
            <p className="text-gray-400">
              Transform your body and mind with our expert guidance. Join the fitness revolution today.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Plans</li>
              <li>BMI Calculator</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">📘</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">📷</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">🐦</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FitnessClub. All rights reserved. Built with passion for fitness.</p>
        </div>
      </div>
    </footer>
  );
}