"use client";
import { useState } from "react";

export default function PropertyCard({ property }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-lightAccent shadow-card rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-dark">{property.name}</h2>
        <span className="text-accent font-medium">${property.value.toLocaleString()}</span>
      </div>
      <p className="text-sm text-subHeading">{property.location}</p>
      <div className="mt-2 flex flex-wrap gap-4 text-sm">
        <div>Energy Cost: <span className="font-medium">{property.energyCost}%</span></div>
        <div>Occupancy: <span className="font-medium">{property.occupancy}%</span></div>
        <div>Last Maint: <span className="font-medium">{property.lastMaintenance}</span></div>
      </div>

      {expanded && (
        <div className="mt-3 text-sm text-dark bg-light p-3 rounded-lg shadow-inner">
          <p><strong>Insights:</strong> {property.insights}</p>
          <p className="mt-1"><strong>Predicted Risk:</strong> {property.prediction}</p>
        </div>
      )}
    </div>
  );
}
