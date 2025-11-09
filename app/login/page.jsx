// app/login/page.jsx
"use client";
// The import statements MUST use './' and include the correct file name.
import React, { useState } from 'react';
import LockIcon from './LockIcon'; 
import VisibilityIcon from './VisibilityIcon'; 
// import { useRouter } from 'next/navigation'; // No need for useRouter here

// Main application component for the Login Page
export default function LoginPage() {
  // const router = useRouter(); // Removed

  // Add the actual login form logic here to be displayed at /login
  // For demonstration, let's add a placeholder login form structure
    
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <LockIcon className="w-10 h-10 text-green-700" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Sign in to EstateWise AI
        </h2>
        <p className="text-gray-500 mb-8 text-center">
          Enter your credentials to continue.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="••••••••"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                <VisibilityIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
            >
              Log in
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}