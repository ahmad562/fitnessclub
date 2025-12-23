export default function Services() {
  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one sessions tailored to your goals with certified trainers.',
      price: '$50/session',
      icon: '🏋️'
    },
    {
      title: 'Group Classes',
      description: 'High-energy group workouts for motivation and fun.',
      price: '$20/class',
      icon: '👥'
    },
    {
      title: 'Membership Plans',
      description: 'Unlimited access to all facilities and premium amenities.',
      price: '$99/month',
      icon: '💪'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary">
              <div className="text-6xl mb-4">{s.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{s.description}</p>
              <p className="text-4xl font-bold text-secondary mb-6">{s.price}</p>
              <button className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-blue-800 transition-colors transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}