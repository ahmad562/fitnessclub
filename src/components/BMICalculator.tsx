'use client';

import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // cm to m
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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">BMI Calculator</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="170"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="70"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Calculate BMI
          </button>
          {bmi && (
            <div className="mt-4 text-center">
              <p className="text-lg">Your BMI: {bmi.toFixed(2)}</p>
              <p className="text-gray-600">{category}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}