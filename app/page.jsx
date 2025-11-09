"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Feature Card component
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
    <div className="text-text-secondary-light dark:text-text-secondary-dark">
      <span className="material-symbols-outlined !text-4xl">{icon}</span>
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm font-normal text-text-primary-light/70 dark:text-text-primary-dark/70">
        {description}
      </p>
    </div>
  </div>
);

// Feature data
const featureData = [
  {
    icon: "description",
    title: "Document Intelligence",
    description:
      "Automatically extract critical data from leases, contracts, and reports in seconds.",
  },
  {
    icon: "manage_search",
    title: "Smart Search",
    description:
      "Use natural language to search across all your documents and data sources instantly.",
  },
  {
    icon: "insights",
    title: "Predictive Analytics",
    description:
      "Leverage AI to forecast market trends, identify opportunities, and assess risks.",
  },
  {
    icon: "summarize",
    title: "Insight Summarization",
    description:
      "Generate concise, actionable reports and summaries from complex datasets.",
  },
];

// Trust logos
const trustLogos = [
  {
    alt: "CBRE logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDagUNZJkciMkdQK-lk4zTAuPGBh5z1piCqkaSTpQm0oAcDN-qz00mQhgJJCieXT3lp_XbypbWhCcGR_yeJnzjopUpq0RE3TIxV8gPsvGNjMnrAFN-zn5ZSgtotrytluxM4M5LVZALVM5y7y8jyL1VB0NKYvN4_Ejjs0FUvbdb2bGQ1LNMh6Gze5de4mAUeV37soZumO1cBYtY7Ct2nRbMazxltQz5x0IUWlldyOYiwSX8JSQAFHeCHj-5YaB5g1ja6QteMDQRFe8k",
  },
  {
    alt: "Microsoft Azure logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_MFohzal1R7U5h7-yywMmZs1YKfk7guaLuZYAPUMDg5XTOUkefuRpWBpL6LqiOuylOqzgCAO6EkPzTX-4vy1YaGR1l2vH6yCIQYbXl9yShk4hcYoAKwLv2CQNfRe0gHiASUJ1PLzUXO378ANQtaPuBN7BYLK6xxUQQQmy2AiL6eho37M-G7BWLUOEuvof5OYsRUuh2kKBRyDX2Vhn4CutKzXX7Fs6LSFyPSJ5hHGiQN_Hrvp2reCP7vCSgZHbUhg0cX8qNLPWrv0",
  },
  {
    alt: "Google Maps logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAiRjp6S1ZSX95Yj-8ZX7b54oyAFtQnGG1iIOl26y_8P_qt957LKxteRWWufIPQed5NJYCclZIG1lFkXJfJOGWVMl4e91ZQzc7R1YCMz6hQQpGAxtrfU4BoAWun7VbFudVS5SzFnqQ3jnQ7_264EKlYCv4wUOSANC4HewK8nZfn_GyR25azwdOfZeTP1foCGWuSYGJ_kHRwXtWcc7OavR9ptWYf12ywgrC0lke59Mt96vtt_ViuZmfZ7nsrWf9kbiiKbq2_wYw7uQ",
  },
  {
    alt: "OpenAI logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSIKL0Jjt9Eors0i5ckyOyOIzxvhgB5umnmzSJtA1alAxMQSiswq7yG39DgO3gs9idS5P_x6IwWThRU8op3bXogacvW4ryIigoMYlO1X51I74H7A2dJL2YXFRZvHNjtP_Bbs5oXlw-O9glD-Iz5PpnlP4Z0uO7vFTgB9HPfV8v10xug0xeouXXAjElhCeVjuvOiseyLKvuw3RMq4vPb6tbr23caMnFCjurzhst3IXv7Jpg3FIkkRRSZ9RX5RzqjCRqAFWHq3NB2D8",
  },
  {
    alt: "Esri logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG6LVytKss0pylA2t-R8OEOLaAdekZq3Tix0e3rZeWoGxYiPkKhVpssRwLUtgSAKJJc2dEsyNX27RFElAt1mmUt1JeGKMJFHWDI2JUqfNiM9kmef9kRiixZyTDMbaNfAi2T37PCicfw6D0QPGZ-GVPo8vU6SOrq8_8tfle42KFzSwhHTs6Y2PZVr1c2P9hD84I-7OMwXNa0puUdoOS7zmqTlAuK8N0NpAPITB1ESAzrEMnY5fmrLY8Wp5WmpM5n_scNot2ByyTPX8",
  },
];

export default function EstateWisePage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-6 py-4 max-w-7xl mx-auto w-full">
        <h2 className="text-xl font-bold tracking-tight">♦ EstateWise</h2>
        <nav className="flex items-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="bg-[#12352f] text-white py-2 px-5 rounded-lg text-sm font-bold hover:bg-[#14563d] transition"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/goals")}
            className="bg-[#9f845d] text-white py-2 px-5 rounded-lg text-sm font-bold hover:opacity-90 transition"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-col flex-1 items-center px-6 py-12 gap-12 lg:gap-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Revolutionize Real Estate Intelligence
            </h1>
            <h2 className="text-lg font-normal text-text-primary-light/80 dark:text-text-primary-dark/80">
              Empowering CBRE professionals with unparalleled, data-driven insights to transform your property portfolio.
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-white py-3 px-8 rounded-lg font-bold hover:bg-opacity-90 transition">
                Explore Your Portfolio
              </button>
              <button className="bg-transparent text-text-primary-light border border-border-light py-3 px-8 rounded-lg font-bold hover:bg-card-light transition">
                Learn How It Works
              </button>
            </div>
          </div>
          <div
            className="w-full aspect-video bg-cover bg-center rounded-xl"
            style={{ backgroundImage: "url('/real-estate-bg.jpg')" }}
          />
        </section>

        {/* Features */}
        <section className="w-full py-20 bg-card-light dark:bg-card-dark">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl font-bold md:text-4xl">Unlock the Power of Your Data</h2>
              <p className="text-lg text-text-primary-light/80 dark:text-text-primary-dark/80">
                EstateWise provides a suite of powerful tools designed to give you a competitive edge in the real estate market.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureData.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust logos */}
        <section className="w-full py-16 px-6 flex flex-col items-center gap-8">
          <h4 className="text-sm font-bold uppercase tracking-widest text-center text-text-primary-light/60 dark:text-text-primary-dark/60">
            Trusted by CBRE and Powered by Industry Leaders
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {trustLogos.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className="h-8 object-contain" />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-20 px-6">
          <div className="bg-card-light dark:bg-card-dark rounded-xl p-10 flex flex-col items-center justify-center text-center gap-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl">
              Connect your portfolio and unlock its full potential today.
            </h2>
            <button className="bg-primary text-white py-3 px-8 rounded-lg font-bold hover:bg-opacity-90 transition">
              Explore Your Portfolio
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border-light dark:border-border-dark py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-text-primary-light/70 dark:text-text-primary-dark/70">
          <span>© 2024 CBRE. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
