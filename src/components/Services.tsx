export default function Services() {
  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one sessions tailored to your goals with certified trainers.',
      price: '$50/session',
      icon: '🏋️',
      features: ['Custom workout plans', 'Nutrition guidance', 'Progress tracking']
    },
    {
      title: 'Group Classes',
      description: 'High-energy group workouts for motivation and fun.',
      price: '$20/class',
      icon: '👥',
      features: ['Variety of classes', 'Community support', 'Flexible scheduling']
    },
    {
      title: 'Membership Plans',
      description: 'Unlimited access to all facilities and premium amenities.',
      price: '$99/month',
      icon: '💪',
      features: ['24/7 gym access', 'All classes included', 'Free consultations']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">Our Services</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals efficiently and effectively.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 border border-neutral-200">
              <div className="text-6xl mb-6 text-center">{s.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-primary-900 text-center">{s.title}</h3>
              <p className="text-neutral-600 mb-6 text-center leading-relaxed">{s.description}</p>
              <ul className="mb-8 space-y-2">
                {s.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-neutral-700">
                    <span className="text-accent-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-primary-600">{s.price}</span>
              </div>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-soft">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}