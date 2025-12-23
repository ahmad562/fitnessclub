export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
        <p className="text-xl mb-8">Join our fitness club and achieve your dream physique with personalized training programs.</p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">Join Now</button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600">Book Free Consultation</button>
        </div>
      </div>
    </section>
  );
}