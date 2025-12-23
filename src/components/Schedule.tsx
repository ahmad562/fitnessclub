export default function Schedule() {
  const classes = [
    { time: '6:00 AM', name: 'Morning Yoga', instructor: 'Jane', icon: '🧘' },
    { time: '7:00 AM', name: 'HIIT Workout', instructor: 'Mike', icon: '🔥' },
    { time: '12:00 PM', name: 'Lunchtime Cardio', instructor: 'Sarah', icon: '🏃' },
    { time: '6:00 PM', name: 'Strength Training', instructor: 'John', icon: '💪' },
    { time: '8:00 PM', name: 'Evening Pilates', instructor: 'Emma', icon: '🤸' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Class Schedule</h2>
        <div className="max-w-4xl mx-auto">
          {classes.map((c, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-6 rounded-lg mb-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{c.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{c.name}</h3>
                  <p className="text-gray-600">Instructor: {c.instructor}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">{c.time}</p>
                <button className="mt-2 bg-secondary text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}