export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'The best decision I ever made! Lost 40 lbs and gained so much confidence.',
      avatar: 'https://picsum.photos/100/100?random=11'
    },
    {
      name: 'Mike T.',
      rating: 5,
      text: 'Professional trainers and amazing community. Highly recommend!',
      avatar: 'https://picsum.photos/100/100?random=12'
    },
    {
      name: 'Emma R.',
      rating: 5,
      text: 'Transformed my life completely. The support here is incredible.',
      avatar: 'https://picsum.photos/100/100?random=13'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
              <h4 className="font-bold text-lg text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-4xl">⭐</span>
            <span className="text-2xl font-bold">4.9/5</span>
            <span className="text-gray-600">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}