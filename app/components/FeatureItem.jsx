"use client";

export default function FeatureItem({ icon, title, description }) {
  return (
    <li className="flex items-start">
      <div className="text-2xl text-[#12352f] mr-4">{icon}</div>
      <div>
        <h3 className="font-bold text-[#12352f]">{title}</h3>
        <p className="text-[#526e5d]">{description}</p>
      </div>
    </li>
  );
}
