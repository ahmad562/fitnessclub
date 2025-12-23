export default function Transformations() {
  const transformations = [
    {
      name: 'John Doe',
      before: 'https://picsum.photos/300/400?random=1',
      after: 'https://picsum.photos/300/400?random=2',
      testimonial: 'Lost 30 lbs in 6 months! The trainers are amazing.',
      details: 'Weight loss: 30 lbs, Muscle gain: 5 lbs'
    },
    {
      name: 'Jane Smith',
      before: 'https://picsum.photos/300/400?random=3',
      after: 'https://picsum.photos/300/400?random=4',
      testimonial: 'Gained muscle and confidence. Highly recommend!',
      details: 'Weight loss: 10 lbs, Muscle gain: 15 lbs'
    },
    {
      name: 'Mike Johnson',
      before: 'https://picsum.photos/300/400?random=5',
      after: 'https://picsum.photos/300/400?random=6',
      testimonial: 'From couch potato to fitness enthusiast.',
      details: 'Weight loss: 25 lbs, Improved endurance'
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Client Transformations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-4 mb-4">
                <img src={t.before} alt="Before" className="w-1/2 rounded" />
                <img src={t.after} alt="After" className="w-1/2 rounded" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
              <p className="text-gray-600 mb-2">{t.testimonial}</p>
              <p className="text-sm text-gray-500">{t.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}