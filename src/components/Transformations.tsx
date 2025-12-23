export default function Transformations() {
  const transformations = [
    {
      name: 'John Doe',
      before: 'https://picsum.photos/300/400?random=1',
      after: 'https://picsum.photos/300/400?random=2',
      testimonial: 'Lost 30 lbs in 6 months! The trainers are amazing.',
      details: 'Weight loss: 30 lbs, Muscle gain: 5 lbs',
      progress: 85
    },
    {
      name: 'Jane Smith',
      before: 'https://picsum.photos/300/400?random=3',
      after: 'https://picsum.photos/300/400?random=4',
      testimonial: 'Gained muscle and confidence. Highly recommend!',
      details: 'Weight loss: 10 lbs, Muscle gain: 15 lbs',
      progress: 90
    },
    {
      name: 'Mike Johnson',
      before: 'https://picsum.photos/300/400?random=5',
      after: 'https://picsum.photos/300/400?random=6',
      testimonial: 'From couch potato to fitness enthusiast.',
      details: 'Weight loss: 25 lbs, Improved endurance',
      progress: 80
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">Real Transformations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((t, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="flex">
                  <img src={t.before} alt="Before" className="w-1/2 rounded-l-lg" />
                  <img src={t.after} alt="After" className="w-1/2 rounded-r-lg" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity">Transformation</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-secondary">{t.name}</h3>
              <p className="text-gray-300 mb-4">{t.testimonial}</p>
              <p className="text-sm text-gray-400 mb-4">{t.details}</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{t.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: `${t.progress}%` }}></div>
                </div>
              </div>
              <button className="w-full bg-secondary text-white py-2 rounded-full hover:bg-red-700 transition-colors">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}