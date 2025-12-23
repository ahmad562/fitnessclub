export default function Blog() {
  const tips = [
    {
      title: 'Stay Hydrated',
      content: 'Drink at least 8 glasses of water a day to keep your body functioning optimally during workouts.',
      icon: '💧'
    },
    {
      title: 'Consistency is Key',
      content: 'Regular exercise and healthy eating habits lead to long-term success. Make fitness a lifestyle.',
      icon: '🔑'
    },
    {
      title: 'Get Enough Sleep',
      content: 'Aim for 7-9 hours of sleep per night to aid recovery and maintain energy levels.',
      icon: '😴'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Fitness Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-4">{tip.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{tip.title}</h3>
              <p className="text-gray-600 text-lg">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}