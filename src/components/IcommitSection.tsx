'use client';

import { useState } from 'react';
import Button from './Button';

const IcommitSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    frequency: 'monthly',
    paymentMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <section id="icommits" className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary text-center mb-8">
        Icommit
      </h1>
      
      <p className="text-primary text-center max-w-2xl mb-8">
        Icommit is our dedicated program for regular contributions to Salt Nation. By committing to regular donations, you help us plan and execute long-term projects that make a lasting impact in our community.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Contact (Email or Phone)</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="frequency" className="block text-gray-700 text-sm font-bold mb-2">Payment Frequency</label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">Payment Method</label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g., Credit Card, PayPal"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <Button
            type="submit"
            variant="primary"
            className="w-full"
          >
            Submit Icommit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default IcommitSection;
