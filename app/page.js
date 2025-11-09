'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [budget, setBudget] = useState(550000);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#14542c] transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50">
        <button className="px-4 py-2 bg-white dark:bg-[#14542c] text-gray-900 dark:text-gray-50 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
          Login
        </button>
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white dark:bg-[#14542c] shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
        >
        {darkMode ? (
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Your Smartest Path to Real Estate Investment
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Answer a few questions to get a personalized financial readiness score and unlock data-driven insights.
          </p>

          {/* Features - Simple list like in your image */}
          <div className="space-y-8 max-w-xl mx-auto text-left">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Personalized Planning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tailored financial roadmaps based on your unique goals and profile.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Market Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Access to CBRE's proprietary data for a competitive edge.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Financial Clarity</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Understand your financial readiness and investment potential.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-16"></div>

        {/* Goals Section */}
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Tell Us About Your Goals
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Complete the following steps to receive your financial snapshot.
          </p>

          {/* Step Indicator */}
          <div className="text-center mb-8">
            <p className="font-semibold text-gray-900 dark:text-white">Step 1 of 5</p>
          </div>

          {/* Budget Question */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
              What is your estimated budget?
            </h3>
            
            {/* Budget Amount - Large Display */}
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
              ${budget.toLocaleString()}
            </div>

            {/* Budget Range Labels */}
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>$100k</span>
              <span>$3M+</span>
            </div>

            {/* Simple Budget Input */}
            <input
              type="range"
              min="100000"
              max="3000000"
              step="50000"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-2 bg--[#14542c] dark:bg--[#14542c] rounded-lg appearance-none cursor-pointer mb-8"
            />

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button className="px-8 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                Back
              </button>
              <button className="px-8 py-3 bg--[#14542c] dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg--[#14542c] dark:hover:bg--[#14542c] transition-colors font-medium">
                Next
              </button>
            </div>
          </div>

          {/* Privacy Notice */}
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12">
            Your information is secure and will only be used to personalize your experience.
          </p>
        </div>
      </main>
    </div>
  );
}