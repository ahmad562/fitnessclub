export default function Services() {
  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one sessions tailored to your goals.',
      price: '$50/session'
    },
    {
      title: 'Group Classes',
      description: 'Fun and motivating group workouts.',
      price: '$20/class'
    },
    {
      title: 'Membership Plans',
      description: 'Unlimited access to all facilities.',
      price: '$99/month'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.description}</p>
              <p className="text-lg font-bold text-blue-600">{s.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}