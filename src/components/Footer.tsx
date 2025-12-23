export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-white">FitnessClub</h3>
            <p className="text-neutral-300 mb-6 leading-relaxed max-w-md">
              Transform your body and mind with our expert guidance. Join the fitness revolution today and become the best version of yourself.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-3 rounded-full transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-3 rounded-full transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.966.021 6.677.072 5.393.124 4.434.245 3.64.446c-.788.201-1.46.47-2.126.836C.846 1.648.47 2.316.202 3.104c-.268.788-.389 1.747-.44 3.031C-.29 7.424-.31 7.854-.31 11.475s.021 4.051.072 5.34c.051 1.284.172 2.243.373 3.037.268.788.647 1.456 1.313 2.122.666.666 1.334 1.045 2.122 1.313.794.201 1.753.322 3.037.373 1.289.051 1.719.072 5.34.072s4.051-.021 5.34-.072c1.284-.051 2.243-.172 3.037-.373.788-.268 1.456-.647 2.122-1.313.666-.666 1.045-1.334 1.313-2.122.201-.794.322-1.753.373-3.037.051-1.289.072-1.719.072-5.34s-.021-4.051-.072-5.34c-.051-1.284-.172-2.243-.373-3.037-.268-.788-.647-1.456-1.313-2.122C22.352.846 21.684.47 20.896.202 20.102.001 19.143-.12 17.859-.172 16.57-.223 16.14-.244 12.519-.244zm0 1.882c3.578 0 4.002.014 5.41.078 1.288.061 1.996.218 2.464.365.6.188 1.028.412 1.478.862.45.45.674.878.862 1.478.147.468.304 1.176.365 2.464.064 1.408.078 1.832.078 5.41s-.014 4.002-.078 5.41c-.061 1.288-.218 1.996-.365 2.464-.188.6-.412 1.028-.862 1.478-.45.45-.878.674-1.478.862-.468.147-1.176.304-2.464.365-1.408.064-1.832.078-5.41.078s-4.002-.014-5.41-.078c-1.288-.061-1.996-.218-2.464-.365-.6-.188-1.028-.412-1.478-.862-.45-.45-.674-.878-.862-1.478-.147-.468-.304-1.176-.365-2.464C1.516 7.477 1.502 7.053 1.502 3.475s.014-4.002.078-5.41c.061-1.288.218-1.996.365-2.464.188-.6.412-1.028.862-1.478.45-.45.878-.674 1.478-.862.468-.147 1.176-.304 2.464-.365 1.408-.064 1.832-.078 5.41-.078zm0 2.77c-3.632 0-6.57 2.938-6.57 6.57s2.938 6.57 6.57 6.57 6.57-2.938 6.57-6.57-2.938-6.57-6.57-6.57zm0 10.82c-2.357 0-4.27-1.913-4.27-4.27s1.913-4.27 4.27-4.27 4.27 1.913 4.27 4.27-1.913 4.27-4.27 4.27zm8.08-11.25c-.84 0-1.52-.68-1.52-1.52s.68-1.52 1.52-1.52 1.52.68 1.52 1.52-.68 1.52-1.52 1.52z"/>
                </svg>
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-3 rounded-full transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-neutral-300">
              <li><a href="#hero" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Personal Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Group Classes</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Nutrition Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">BMI Calculator</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-800 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 FitnessClub. All rights reserved. Built with passion for fitness.</p>
        </div>
      </div>
    </footer>
  );
}