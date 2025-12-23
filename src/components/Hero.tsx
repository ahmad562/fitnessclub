export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/5 to-transparent"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-primary-900">
          Transform Your Body, <br />
          <span className="text-secondary-600">Elevate Your Life</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-neutral-600 leading-relaxed">
          Join our premium fitness community and achieve your goals with expert guidance,
          state-of-the-art facilities, and personalized training programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-medium">
            Start Your Journey
          </button>
          <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-200">
            Book Consultation
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-neutral-600 font-medium">Members Transformed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <div className="text-4xl font-bold text-secondary-600 mb-2">95%</div>
            <div className="text-neutral-600 font-medium">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <div className="text-4xl font-bold text-accent-600 mb-2">10+</div>
            <div className="text-neutral-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}