// // // page.jsx
// // // export default EstateWiseApp;

// // "use client";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import FeatureItem from "./components/FeatureItem.jsx";
// // import GoalsCard from "./components/GoalsCard.jsx";
// // import { BarChartBig, ChartLine, BadgeDollarSign } from "lucide-react";

// // export default function EstateWiseApp() {
// //   const router = useRouter();
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [budget, setBudget] = useState(550000);
// //   const handleLoginClick = () => { // <--- NEW: Define handler
// //     router.push('/login'); 
// //   };

// //   const handleNext = () => {
// //     if (currentStep < 5) setCurrentStep(currentStep + 1);
// //   };

// //   const handleBack = () => {
// //     if (currentStep > 1) setCurrentStep(currentStep - 1);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#fffdf4] p-4 sm:p-8">
// //       <header className="flex justify-between items-center py-4 px-2">
// //         <div className="flex items-center text-xl font-semibold text-gray-700">
// //           <span className="text-[#12352f] mr-2">♦</span> EstateWise AI
// //         </div>
// //         <div>
// //           <button 
// //             onClick={handleLoginClick} // <--- UPDATED: Attach handler
// //             className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-150"
// //           >
// //             Login
// //           </button>
// //         </div>

// //       </header>

// //       <main className="container mx-auto mt-8 p-4 sm:p-10 flex flex-col lg:flex-row gap-10">
        
// //         {/* LEFT SIDE */}
// //         <div className="lg:w-1/2">
// //           <h1 className="text-4xl sm:text-5xl font-extrabold text-[#12352f] mb-8">
// //             Your <strong>Smartest Path to Real Estate Investment</strong>
// //           </h1>

// //           <p className="text-lg text-[#526e5d] mb-10">
// //             Answer a few questions to get a personalized financial readiness score.
// //           </p>
// //           <ul className="space-y-6">
// //             <FeatureItem icon={<BarChartBig />} title="Personalized Planning" description="Tailored financial roadmaps." />
// //             <FeatureItem icon={<ChartLine />} title="Market Insights" description="Access CBRE data for an edge." />
// //             <FeatureItem icon={<BadgeDollarSign />} title="Financial Clarity" description="Understand your investment potential." />
// //           </ul>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="lg:w-1/2">
// //           <GoalsCard
// //             step={currentStep}
// //             budget={budget}
// //             setBudget={setBudget}
// //             onNext={handleNext}
// //             onBack={handleBack}
// //           />
// //         </div>

// //       </main>
// //     </div>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FiArrowDown } from "react-icons/fi";

// export default function LandingPage() {
//   const router = useRouter();

//   const handleLogin = () => router.push("/login");
//   const handleGetStarted = () => router.push("/goals");

//   return (
//     <div className="bg-[#fffffb] min-h-screen text-[#12352f] flex flex-col">
//       <header className="flex justify-between items-center py-6 px-8">
//         <h1 className="text-3xl font-bold tracking-wide">EstateWise</h1>

//         <nav className="flex gap-6">
//           <button
//             onClick={handleLogin}
//             className="text-lg font-medium hover:underline"
//           >
//             Login
//           </button>
//           <button
//             onClick={handleGetStarted}
//             className="bg-[#12352f] text-white py-2 px-5 rounded-lg text-lg font-medium"
//           >
//             Get Started
//           </button>
//         </nav>
//       </header>

//       <main className="flex flex-col lg:flex-row items-center grow px-8 lg:px-16 gap-10 py-12">
//         <div className="flex-1">
//           <h2 className="text-5xl font-bold leading-tight mb-6">
//             Your Path to Smart
//             <br />
//             Property Investment
//           </h2>
//           <p className="text-lg text-[#5b7168] max-w-lg mb-10">
//             Plan confidently. Discover real estate opportunities tailored to your
//             budget and goals with AI-powered insights.
//           </p>

//           <button
//             onClick={handleGetStarted}
//             className="bg-[#9f845d] text-white py-3 px-10 rounded-lg text-lg font-semibold hover:opacity-90 transition"
//           >
//             Get Started
//           </button>
//         </div>

//         <div className="flex-1 flex justify-center">
//           <div className="relative w-[450px] h-[450px] rounded-2xl shadow-2xl overflow-hidden">
//             <Image
//               src="/hero-building.png"
//               alt="Commercial Building"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </main>

//       <div className="flex justify-center pb-10">
//         <FiArrowDown className="text-3xl animate-bounce" />
//       </div>
//     </div>
//   );
// }
"use client";

import React from 'react';
import { useRouter } from "next/navigation";


// Assuming Material Symbols are available, either via a global link 
// or by importing a library like 'react-icons' for similar icons.

// Helper component for Feature Cards
const FeatureCard = ({ icon, title, description }) => (
    // Note: The background-light is white/off-white, and border-light is a light gray.
    <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6">
        <div className="text-text-secondary-light dark:text-text-secondary-dark">
            <span className="material-symbols-outlined !text-4xl">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">{title}</h3>
            {/* The light-mode text-primary-light/70 is a darker gray for body text */}
            <p className="text-sm font-normal text-text-primary-light/70 dark:text-text-primary-dark/70">{description}</p>
        </div>
    </div>
);

// Data for the Features and Trust logos
const featureData = [
    { icon: 'description', title: 'Document Intelligence', description: 'Automatically extract critical data from leases, contracts, and reports in seconds.' },
    { icon: 'manage_search', title: 'Smart Search', description: 'Use natural language to search across all your documents and data sources instantly.' },
    { icon: 'insights', title: 'Predictive Analytics', description: 'Leverage AI to forecast market trends, identify opportunities, and assess risks.' },
    { icon: 'summarize', title: 'Insight Summarization', description: 'Generate concise, actionable reports and summaries from complex datasets.' }
];

const trustLogos = [
    { alt: 'CBRE logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDagUNZJkciMkdQK-lk4zTAuPGBh5z1piCqkaSTpQm0oAcDN-qz00mQhgJJCieXT3lp_XbypbWhCcGR_yeJnzjopUpq0RE3TIxV8gPsvGNjMnrAFN-zn5ZSgtotrytluxM4M5LVZALVM5y7y8jyL1VB0NKYvN4_Ejjs0FUvbdb2bGQ1LNMh6Gze5de4mAUeV37soZumO1cBYtY7Ct2nRbMazxltQz5x0IUWlldyOYiwSX8JSQAFHeCHj-5YaB5g1ja6QteMDQRFe8k' },
    { alt: 'Microsoft Azure logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_MFohzal1R7U5h7-yywMmZs1YKfk7guaLuZYAPUMDg5XTOUkefuRpWBpL6LqiOuylOqzgCAO6EkPzTX-4vy1YaGR1l2vH6yCIQYbXl9yShk4hcYoAKwLv2CQNfRe0gHiASUJ1PLzUXO378ANQtaPuBN7BYLK6xxUQQQmy2AiL6eho37M-G7BWLUOEuvof5OYsRUuh2kKBRyDX2Vhn4CutKzXX7Fs6LSFyPSJ5hHGiQN_Hrvp2reCP7vCSgZHbUhg0cX8qNLPWrv0' },
    { alt: 'Google Maps logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAiRjp6S1ZSX95Yj-8ZX7b54oyAFtQnGG1iIOl26y_8P_qt957LKxteRWWufIPQed5NJYCclZIG1lFkXJfJOGWVMl4e91ZQzc7R1YCMz6hQQpGAxtrfU4BoAWun7VbFudVS5SzFnqQ3jnQ7_264EKlYCv4wUOSANC4HewK8nZfn_GyR25azwdOfZeTP1foCGWuSYGJ_kHRwXtWcc7OavR9ptWYf12ywgrC0lke59Mt96vtt_ViuZmfZ7nsrWf9kbiiKbq2_wYw7uQ' },
    { alt: 'OpenAI logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSIKL0Jjt9Eors0i5ckyOyOIzxvhgB5umnmzSJtA1alAxMQSiswq7yG39DgO3gs9idS5P_x6IwWThRU8op3bXogacvW4ryIigoMYlO1X51I74H7A2dJL2YXFRZvHNjtP_Bbs5oXlw-O9glD-Iz5PpnlP4Z0uO7vFTgB9HPfV8v10xug0xeouXXAjElhCeVjuvOiseyLKvuw3RMq4vPb6tbr23caMnFCjurzhst3IXv7Jpg3FIkkRRSZ9RX5RzqjCRqAFWHq3NB2D8' },
    { alt: 'Esri logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG6LVytKss0pylA2t-R8OEOLaAdekZq3Tix0e3rZeWoGxYiPkKhVpssRwLUtgSAKJJc2dEsyNX27RFElAt1mmUt1JeGKMJFHWDI2JUqfNiM9kmef9kRiixZyTDMbaNfAi2T37PCicfw6D0QPGZ-GVPo8vU6SOrq8_8tfle42KFzSwhHTs6Y2PZVr1c2P9hD84I-7OMwXNa0puUdoOS7zmqTlAuK8N0NpAPITB1ESAzrEMnY5fmrLY8Wp5WmpM5n_scNot2ByyTPX8' }
];

// Main Component
export default function EstateWisePage() {
    const router = useRouter(); 
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden 
                        font-display bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
            
            <div className="layout-container flex h-full grow flex-col">
                
                {/* 1. Header */}
                <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                    <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 max-w-7xl w-full">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold tracking-tight">♦ EstateWise</h2>
                        </div>
                        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                            <div className="flex items-center gap-8 text-sm font-medium">
                                <a className="hover:text-primary transition-colors" href="#">Features</a>
                                <a className="hover:text-primary transition-colors" href="#">About</a>
                                <a className="hover:text-primary transition-colors" href="#">Support</a>
                            </div>
                            {/* Login Button (Primary color filled) */}
                            <button
                                onClick={() => router.push('/login')}
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 
                                            bg-[#12352f] text-white text-sm font-bold leading-normal tracking-wide 
                                            hover:bg-[#14563d] transition-colors"
                                >
                                <span className="truncate">Login</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* 2. Main Content */}
                <main className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-7xl flex-1">
                        
                        {/* Hero Section - NO explicit background, inherits bg-background-light (white/off-white) */}
                        <section className="w-full py-20 px-4 sm:px-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="flex flex-col gap-6 text-left">
                                    {/* Text colors revert to dark text */}
                                    <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl text-text-primary-light">
                                        Revolutionize Real Estate Intelligence
                                    </h1>
                                    <h2 className="text-lg font-normal leading-normal text-text-primary-light/80">
                                        Empowering CBRE professionals with unparalleled, data-driven insights to transform your property portfolio.
                                    </h2>
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {/* Explore Button - Dark background (Primary), White Text */}
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                                            <span className="truncate">Explore Your Portfolio</span>
                                        </button>
                                        {/* Learn Button - White background, Dark Text, Dark Border */}
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-text-primary-light border border-border-light text-base font-bold leading-normal tracking-wide hover:bg-card-light transition-colors">
                                            <span className="truncate">Learn How It Works</span>
                                        </button>
                                    </div>
                                </div>
                                <div 
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" 
                                    data-alt="Abstract graphic representing data flow and neural networks" 
                                    style={{ backgroundImage: "url('/real-estate-bg.jpg')" }}
                                />
                            </div>
                        </section>
                        
                        {/* Feature Showcase Section - Background color is CARD_LIGHT (off-white/light-gray) */}
                        <section className="w-full py-20 px-4 sm:px-10 bg-card-light dark:bg-card-dark">
                            <div className="flex flex-col gap-12">
                                <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
                                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                                        Unlock the Power of Your Data
                                    </h2>
                                    <p className="text-lg text-text-primary-light/80 dark:text-text-primary-dark/80">
                                        EstateWise provides a suite of powerful tools designed to give you a competitive edge in the real estate market.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {featureData.map(card => (
                                        <FeatureCard key={card.title} {...card} />
                                    ))}
                                </div>
                            </div>
                        </section>
                        
                        {/* Trust Section */}
                        <section className="w-full py-16 px-4 sm:px-10">
                            <div className="flex flex-col items-center gap-8">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary-light/60 dark:text-text-primary-dark/60 text-center">Trusted by CBRE and Powered by Industry Leaders</h4>
                                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
                                    {trustLogos.map((logo, index) => (
                                        <img key={index} className="h-8 object-contain" data-alt={logo.alt} src={logo.src} />
                                    ))}
                                </div>
                            </div>
                        </section>
                        
                        {/* CTA Block - Background color is CARD_LIGHT (off-white/light-gray) */}
                        <section className="w-full py-20 px-4 sm:px-10">
                            <div className="bg-card-light dark:bg-card-dark rounded-xl p-10 lg:p-16 flex flex-col items-center justify-center text-center gap-6">
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl max-w-2xl">Connect your portfolio and unlock its full potential today.</h2>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors mt-4">
                                    <span className="truncate">Explore Your Portfolio</span>
                                </button>
                            </div>
                        </section>
                    </div>
                </main>

                {/* 3. Footer */}
                <footer className="w-full border-t border-border-light dark:border-border-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="text-sm text-text-primary-light/70 dark:text-text-primary-dark/70">© 2024 CBRE. All Rights Reserved.</div>
                        <div className="flex items-center gap-6 text-sm font-medium">
                            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                            <a className="hover:text-primary transition-colors" href="#">Contact</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}