// page.jsx
"use client";
import { useState } from 'react';

// Main application component
function EstateWiseApp() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-2">
        <div className="flex items-center text-xl font-semibold text-gray-700">
          <span className="text-green-600 mr-2">♦</span> EstateWise AI
        </div>
        <div>
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-lg mr-3 shadow-md transition duration-150">
            For Professionals
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-150">
            Login
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto mt-8 p-4 sm:p-10 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Value Proposition */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            Your <strong>Smartest Path to Real Estate Investment</strong>
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Answer a few questions to get a personalized financial readiness score and unlock data-driven insights.
          </p>
          
          <ul className="space-y-6">
            <FeatureItem 
              icon="📈" 
              title="Personalized Planning" 
              description="Tailored financial roadmaps based on your unique goals and profile." 
            />
            <FeatureItem 
              icon="📊" 
              title="Market Insights" 
              description="Access to CBRE's proprietary data for a competitive edge." 
            />
            <FeatureItem 
              icon="♀️" 
              title="Financial Clarity" 
              description="Understand your financial readiness and investment potential." 
            />
          </ul>
        </div>

        {/* Right Side: Interactive Card (Step 1) */}
        <div className="lg:w-1/2">
          <GoalsCard />
        </div>
      </main>
    </div>
  );
}

// Reusable component for the features list
const FeatureItem = ({ icon, title, description }) => (
  <li className="flex items-start">
    <div className="text-2xl text-green-600 mr-4">{icon}</div>
    <div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </li>
);

// Component for the "Tell Us About Your Goals" card
const GoalsCard = () => {
  const [budget, setBudget] = useState(550000); // Initial value set to $550,000

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  };

  const handleSliderChange = (event) => {
    setBudget(Number(event.target.value));
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Tell Us About Your Goals
      </h2>
      <p className="text-gray-500 mb-6 border-b pb-4">
        Complete the following steps to receive your financial snapshot.
      </p>

      {/* Progress Indicator */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-600 mb-2">
          Step 1 of 5
        </p>
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div className="h-2 bg-green-600 rounded-full" style={{ width: '20%' }}></div>
        </div>
      </div>

      {/* Budget Input Section */}
      <div className="mb-10">
        <label className="block text-gray-700 mb-4">
          What is your estimated budget?
        </label>
        
        {/* Display Budget */}
        <div className="text-4xl font-bold text-gray-800 mb-6 text-center">
          {formatCurrency(budget)}
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min="100000" // $100k
          max="2000000" // $2M
          step="50000" // $50k increment
          value={budget}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-green-600 [&::-moz-range-thumb]:bg-green-600"
        />
        
        {/* Min/Max Labels */}
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>$100k</span>
          <span>$2M+</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-150">
          Back
        </button>
        <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-150">
          Next
        </button>
      </div>
      
      {/* Footer Note */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        Your information is secure and will only be used to personalize your experience.
      </p>
    </div>
  );
};

export default EstateWiseApp;
