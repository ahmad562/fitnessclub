export default function Schedule() {
  const classes = [
    { time: '6:00 AM', name: 'Morning Yoga', instructor: 'Jane' },
    { time: '7:00 AM', name: 'HIIT Workout', instructor: 'Mike' },
    { time: '12:00 PM', name: 'Lunchtime Cardio', instructor: 'Sarah' },
    { time: '6:00 PM', name: 'Strength Training', instructor: 'John' },
    { time: '8:00 PM', name: 'Evening Pilates', instructor: 'Emma' }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Class Schedule</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {classes.map((c, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <div>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-gray-600">Instructor: {c.instructor}</p>
              </div>
              <p className="text-lg font-bold">{c.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}