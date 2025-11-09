// page.jsx
// export default EstateWiseApp;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FeatureItem from "./components/FeatureItem.jsx";
import GoalsCard from "./components/GoalsCard.jsx";
import { BarChartBig, ChartLine, BadgeDollarSign } from "lucide-react";

export default function EstateWiseApp() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [budget, setBudget] = useState(550000);
  const handleLoginClick = () => { // <--- NEW: Define handler
    router.push('/login'); 
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-[#fffdf4] p-4 sm:p-8">
      <header className="flex justify-between items-center py-4 px-2">
        <div className="flex items-center text-xl font-semibold text-gray-700">
          <span className="text-[#12352f] mr-2">♦</span> EstateWise AI
        </div>
        <div>
          <button 
            onClick={handleLoginClick} // <--- UPDATED: Attach handler
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-150"
          >
            Login
          </button>
        </div>

      </header>

      <main className="container mx-auto mt-8 p-4 sm:p-10 flex flex-col lg:flex-row gap-10">
        
        {/* LEFT SIDE */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#12352f] mb-8">
            Your <strong>Smartest Path to Real Estate Investment</strong>
          </h1>

          <p className="text-lg text-[#526e5d] mb-10">
            Answer a few questions to get a personalized financial readiness score.
          </p>
          <ul className="space-y-6">
            <FeatureItem icon={<BarChartBig />} title="Personalized Planning" description="Tailored financial roadmaps." />
            <FeatureItem icon={<ChartLine />} title="Market Insights" description="Access CBRE data for an edge." />
            <FeatureItem icon={<BadgeDollarSign />} title="Financial Clarity" description="Understand your investment potential." />
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2">
          <GoalsCard
            step={currentStep}
            budget={budget}
            setBudget={setBudget}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>

      </main>
    </div>
  );
}
