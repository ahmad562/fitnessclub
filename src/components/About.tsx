export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://picsum.photos/500/400?random=7" alt="Trainer" className="rounded-xl shadow-2xl" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-5xl font-bold mb-6">Meet Your Coach</h2>
            <p className="text-xl text-gray-300 mb-6">
              With over 10 years of experience, our certified trainer has helped hundreds of clients achieve their fitness goals.
              Specializing in weight loss, muscle building, and overall wellness, we provide personalized programs that work.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">500+</div>
                <div className="text-gray-400">Clients Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">95%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
            <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}