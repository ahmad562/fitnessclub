'use client';

import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h && w) {
      const bmiValue = w / (h * h);
      setBmi(bmiValue);
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">BMI Calculator</h2>
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl">
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-secondary focus:outline-none"
              placeholder="170"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-secondary focus:outline-none"
              placeholder="70"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors transform hover:scale-105"
          >
            Calculate BMI
          </button>
          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-3xl font-bold text-secondary mb-2">{bmi.toFixed(2)}</p>
              <p className="text-xl text-gray-300">{category}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}