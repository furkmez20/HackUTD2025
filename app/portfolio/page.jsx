// // app/portfolio/page.jsx

// 'use client';

// import React, { useState } from 'react';
// import PortfolioCard from '../components/StatCard';
// import SidePanel from '../components/Sidebar';
// import mockPortfolio from '../data/mockPortfolio'; // Import your mock data

// export default function PortfolioPage() {
//     const [selectedProperty, setSelectedProperty] = useState(null);

//     const handleCardClick = (property) => {
//         setSelectedProperty(property);
//     };

//     const handleClosePanel = () => {
//         setSelectedProperty(null);
//     };

//     return (
//         <div className="portfolio-page-layout">
            
//             {/* Main Content Area */}
//             <div className="main-content-area">
//                 <div className="container">
//                     <h1 className="page-title">My Portfolio Properties</h1>
//                     <p className="page-subtitle">A consolidated, intelligent view of all managed assets.</p>

//                     <div className="portfolio-grid">
//                         {mockPortfolio.map((property) => (
//                             <PortfolioCard 
//                                 key={property.id} 
//                                 property={property} 
//                                 onClick={handleCardClick} 
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Side Panel (Detail View) */}
//             <SidePanel 
//                 property={selectedProperty} 
//                 onClose={handleClosePanel} 
//                 isVisible={!!selectedProperty}
//             />

//             {/* Optional: Darken background when panel is open */}
//             <div 
//                 className={`panel-backdrop ${!!selectedProperty ? 'visible' : ''}`}
//                 onClick={handleClosePanel}
//             ></div>
//         </div>
//     );
// }
"use client";
import PropertyCard from "../components/PropertyCard";

const mockProperties = [
  {
    name: "Dallas Commerce Center",
    location: "Dallas, TX",
    value: 12500000,
    energyCost: 18,
    occupancy: 92,
    lastMaintenance: "Aug 2024",
    insights:
      "Energy consumption up 8% YoY, mainly due to HVAC inefficiencies. Potential to cut costs via predictive maintenance.",
    prediction: "Moderate Risk of Value Drop (3–5%)",
  },
  {
    name: "Austin Tech Park",
    location: "Austin, TX",
    value: 8400000,
    energyCost: 12,
    occupancy: 97,
    lastMaintenance: "Oct 2024",
    insights:
      "Excellent operational efficiency. High occupancy driven by new tech tenants; sustainability certification pending.",
    prediction: "Low Risk, Strong Growth Outlook",
  },
  {
    name: "Houston Business Tower",
    location: "Houston, TX",
    value: 17300000,
    energyCost: 22,
    occupancy: 81,
    lastMaintenance: "Jul 2024",
    insights:
      "Maintenance delays impacting sustainability targets. High energy use due to older infrastructure.",
    prediction: "High Risk of Value Decline",
  },
];

export default function PortfolioPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {mockProperties.map((property, idx) => (
        <PropertyCard key={idx} property={property} />
      ))}
    </div>
  );
}
