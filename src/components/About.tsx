export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://picsum.photos/500/400?random=7" alt="Trainer" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-bold mb-6">About Our Trainer</h2>
            <p className="text-lg text-gray-600 mb-4">
              With over 10 years of experience, our certified trainer has helped hundreds of clients achieve their fitness goals.
              Specializing in weight loss, muscle building, and overall wellness, we provide personalized programs that work.
            </p>
            <p className="text-lg text-gray-600">
              Join us and become part of our success stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}