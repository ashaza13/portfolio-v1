import React, { useState } from "react";

const TechnologySkill = ({ icon: Icon, name, hoverColor = "text-blue-500" }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Convert Tailwind color classes to actual hex colors
    const getHoverColorValue = (colorClass) => {
        const colorMap = {
            'text-orange-500': '#f97316',
            'text-blue-400': '#60a5fa',
            'text-yellow-400': '#facc15',
            'text-cyan-400': '#22d3ee',
            'text-orange-400': '#fb923c',
            'text-blue-500': '#3b82f6',
            'text-blue-600': '#2563eb',
            'text-red-500': '#ef4444',
            'text-gray-200': '#e5e7eb',
            'text-yellow-500': '#eab308'
        };
        return colorMap[colorClass] || '#3b82f6';
    };

    return (
        <div 
            className="flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-4 drop-shadow-lg transition-all duration-300">
                <Icon 
                    className="text-5xl transition-colors duration-300"
                    style={{ 
                        color: isHovered ? getHoverColorValue(hoverColor) : '#ffffff'
                    }}
                />
            </div>
            <span className="text-white text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
            </span>
        </div>
    );
};

export default TechnologySkill; 