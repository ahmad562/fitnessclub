'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="mb-2"><strong>WhatsApp:</strong> +1234567890</p>
            <p className="mb-2"><strong>Email:</strong> info@fitnessclub.com</p>
            <p className="mb-4"><strong>Address:</strong> 123 Fitness St, City, State 12345</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">Book Free Consultation</button>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}