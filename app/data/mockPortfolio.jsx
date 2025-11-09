// data/mockPortfolio.js

const mockPortfolio = [
    {
        id: 'P001',
        image: '/placeholder_office.jpg', // Replace with your image paths
        name: 'The Commerce Tower',
        location: 'Dallas, TX',
        occupancy: 96,
        value: 125.5, // M
        riskLevel: 'Low',
        sustainabilityScore: 'A',
        sqFt: 450000,
        revenue: 12.8, // M
        operatingCost: 4.2, // M
        energyCostTrend: 'down',
        leaseExpiryCount: 2,
        lastUpdated: '2025-10-25',
        details: 'Prime Class A asset in the CBD with strong renewal rates. Focus on reducing water consumption.'
    },
    {
        id: 'P002',
        image: '/placeholder_retail.jpg',
        name: 'Plaza 200 Retail Center',
        location: 'Austin, TX',
        occupancy: 81,
        value: 55.2,
        riskLevel: 'Medium',
        sustainabilityScore: 'C+',
        sqFt: 180000,
        revenue: 5.1,
        operatingCost: 2.1,
        energyCostTrend: 'up',
        leaseExpiryCount: 6,
        lastUpdated: '2025-10-18',
        details: 'Recent large tenant departure. High priority for new leasing and energy efficiency upgrades.'
    },
    {
        id: 'P003',
        image: '/placeholder_industrial.jpg',
        name: 'Greenway Logistics Hub',
        location: 'Houston, TX',
        occupancy: 100,
        value: 88.0,
        riskLevel: 'Very Low',
        sustainabilityScore: 'B',
        sqFt: 750000,
        revenue: 7.5,
        operatingCost: 1.5,
        energyCostTrend: 'down',
        leaseExpiryCount: 0,
        lastUpdated: '2025-10-29',
        details: 'Fully leased industrial facility with long-term anchor tenants. Excellent operational efficiency.'
    },
    {
        id: 'P004',
        image: '/placeholder_office2.jpg',
        name: 'Mesa Vista Corporate Park',
        location: 'Denver, CO',
        occupancy: 72,
        value: 95.0,
        riskLevel: 'High',
        sustainabilityScore: 'D',
        sqFt: 320000,
        revenue: 4.5,
        operatingCost: 3.2,
        energyCostTrend: 'up',
        leaseExpiryCount: 4,
        lastUpdated: '2025-10-22',
        details: 'Facing high vacancy and significant operational expenses. Predictive model suggests value erosion without intervention.'
    }
];

export default mockPortfolio;