"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LockIcon from "./LockIcon";
import VisibilityIcon from "./VisibilityIcon";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder logic; replace with real authentication
    console.log("Logging in...");
    router.push("/goals"); // Navigate after login
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center px-4 py-12">
      <div className="bg-card-light dark:bg-card-dark p-10 sm:p-12 rounded-2xl shadow-2xl w-full max-w-md">
        
        <div className="flex justify-center mb-6">
          <LockIcon className="w-12 h-12 text-primary" />
        </div>

        <h2 className="text-3xl font-extrabold text-text-primary-light dark:text-text-primary-dark mb-2 text-center">
          Sign in to EstateWise
        </h2>
        <p className="text-text-primary-light/70 dark:text-text-primary-dark/70 mb-8 text-center">
          Enter your credentials to continue
        </p>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary-light/80 dark:text-text-primary-dark/80 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="block w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-primary-light/50 dark:placeholder:text-text-primary-dark/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary-light/80 dark:text-text-primary-dark/80 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="block w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-primary-light/50 dark:placeholder:text-text-primary-dark/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-primary-light/50 dark:text-text-primary-dark/50"
                onClick={() => setShowPassword(!showPassword)}
              >
                <VisibilityIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end text-sm">
            <a href="#" className="font-medium text-primary hover:text-primary/80 transition">
              Forgot your password?
            </a>
          </div>

          {/* Login button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#12352f] text-white py-3 px-6 rounded-lg font-bold transition"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
