export default function Blog() {
  const tips = [
    {
      title: 'Stay Hydrated',
      content: 'Drink at least 8 glasses of water a day to keep your body functioning optimally.'
    },
    {
      title: 'Consistency is Key',
      content: 'Regular exercise and healthy eating habits lead to long-term success.'
    },
    {
      title: 'Get Enough Sleep',
      content: 'Aim for 7-9 hours of sleep per night to aid recovery and energy levels.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Fitness Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
              <p className="text-gray-600">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}