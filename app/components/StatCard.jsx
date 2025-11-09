import React from 'react';

export default function StatCard({ title, value, change, status, changeColor }) {
    return (
        // Standard Tailwind classes for structure + CSS variables for colors
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-[--light] border border-[--lightAccent] shadow-sm">
            <p className="text-sm font-medium text-[--subHeading] leading-normal">{title}</p>
            <div className="flex items-baseline gap-2">
                <p className="tracking-tight text-3xl font-bold leading-tight text-[--dark]">{value}</p>
                <div className={`flex items-center text-sm font-medium ${changeColor}`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        {status === 'up' ? 'arrow_upward' : 'arrow_downward'}
                    </span>
                    <span>{change}</span>
                </div>
            </div>
        </div>
    );
}