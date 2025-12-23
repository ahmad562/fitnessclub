export default function Transformations() {
  const transformations = [
    {
      name: 'Sarah Mitchell',
      before: 'https://picsum.photos/300/400?random=1',
      after: 'https://picsum.photos/300/400?random=2',
      testimonial: 'Lost 30 lbs in 6 months! The trainers are amazing.',
      details: 'Weight loss: 30 lbs, Muscle gain: 5 lbs',
      progress: 85
    },
    {
      name: 'David Chen',
      before: 'https://picsum.photos/300/400?random=3',
      after: 'https://picsum.photos/300/400?random=4',
      testimonial: 'Gained muscle and confidence. Highly recommend!',
      details: 'Weight loss: 10 lbs, Muscle gain: 15 lbs',
      progress: 90
    },
    {
      name: 'Emma Rodriguez',
      before: 'https://picsum.photos/300/400?random=5',
      after: 'https://picsum.photos/300/400?random=6',
      testimonial: 'From couch potato to fitness enthusiast.',
      details: 'Weight loss: 25 lbs, Improved endurance',
      progress: 80
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">Real Transformations</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See the remarkable results our members achieve through dedication and expert guidance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="flex">
                  <img src={t.before} alt="Before" className="w-1/2 rounded-l-lg" />
                  <img src={t.after} alt="After" className="w-1/2 rounded-r-lg" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-900 font-bold text-lg bg-white px-4 py-2 rounded-full shadow-soft">Transformation</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-900">{t.name}</h3>
              <p className="text-neutral-600 mb-4 italic">"{t.testimonial}"</p>
              <p className="text-sm text-neutral-500 mb-4">{t.details}</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-neutral-700">Progress</span>
                  <span className="font-bold text-primary-600">{t.progress}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-500" style={{ width: `${t.progress}%` }}></div>
                </div>
              </div>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                Start Your Transformation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}