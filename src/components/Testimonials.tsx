export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Lost 40 lbs',
      rating: 5,
      text: 'The best decision I ever made! Lost 40 lbs and gained so much confidence. The support here is incredible.',
      avatar: 'https://picsum.photos/100/100?random=11'
    },
    {
      name: 'David Chen',
      role: 'Gained 20 lbs muscle',
      rating: 5,
      text: 'Professional trainers and amazing community. Highly recommend! My transformation has been life-changing.',
      avatar: 'https://picsum.photos/100/100?random=12'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Improved endurance',
      rating: 5,
      text: 'From couch potato to fitness enthusiast. The personalized approach made all the difference.',
      avatar: 'https://picsum.photos/100/100?random=13'
    }
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">What Our Members Say</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Real stories from real people who transformed their lives with our guidance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-6">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mr-4 border-4 border-primary-100" />
                <div>
                  <h4 className="font-bold text-lg text-primary-900">{t.name}</h4>
                  <p className="text-primary-600 font-medium">{t.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
                ))}
              </div>
              <p className="text-neutral-600 italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-white px-8 py-6 rounded-xl shadow-soft">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-1">4.9/5</div>
              <div className="text-neutral-600 font-medium">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-neutral-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-1">98%</div>
              <div className="text-neutral-600 font-medium">Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-neutral-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-1">500+</div>
              <div className="text-neutral-600 font-medium">Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}