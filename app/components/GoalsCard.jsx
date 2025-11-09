"use client";

export default function GoalsCard({ budget, setBudget, onSubmit }) {

  const formatCurrency = (amount) =>
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="bg-[#fffffb] p-6 sm:p-10 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-semibold text-[#12352f] mb-4">
        What is your estimated budget?
      </h2>

      <div className="text-4xl font-bold text-[#12352f] mb-6 text-center">
        {formatCurrency(budget)}
      </div>

      <input
        type="range"
        min="100000"
        max="2000000"
        step="50000"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="w-full h-2 bg-[#f1ead5] rounded-lg cursor-pointer"
      />

      <div className="flex justify-end pt-6">
        <button
          onClick={onSubmit}
          className="bg-[#12352f] text-white py-2 px-6 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
