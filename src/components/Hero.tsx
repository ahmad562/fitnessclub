export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat text-white py-32"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=10')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Unleash Your <span className="text-secondary">Inner Strength</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Transform your body and mind with our expert trainers. Join thousands who've achieved their fitness goals.
        </p>
        <div className="space-x-6">
          <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
            Contact Coach
          </button>
        </div>
        <div className="mt-12 flex justify-center space-x-8 text-center">
          <div>
            <div className="text-4xl font-bold text-secondary">500+</div>
            <div className="text-lg">Happy Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary">95%</div>
            <div className="text-lg">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary">10+</div>
            <div className="text-lg">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}