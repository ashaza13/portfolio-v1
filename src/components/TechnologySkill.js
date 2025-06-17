import React, { useState } from "react";

const TechnologySkill = ({ icon: Icon, name, hoverColor = "text-blue-500" }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Convert Tailwind color classes to Headspace-inspired colors
    const getHoverColorValue = (colorClass) => {
        const colorMap = {
            'text-orange-500': '#FF6B35',  // Primary orange
            'text-blue-400': '#4FC3F7',   // Light blue
            'text-yellow-400': '#FFB340', // Accent yellow
            'text-cyan-400': '#4FC3F7',   // Light blue
            'text-orange-400': '#F7931E', // Secondary orange
            'text-blue-500': '#29B6F6',   // Dark blue
            'text-blue-600': '#1565C0',   // Navy blue
            'text-red-500': '#FF6B35',    // Primary orange
            'text-gray-200': '#37474F',   // Slate
            'text-yellow-500': '#FFB340', // Accent yellow
            'text-green-400': '#81C784', // Green light
            'text-green-500': '#66BB6A', // Green dark
            'text-purple-400': '#FF6B35' // Primary orange
        };
        return colorMap[colorClass] || '#FF6B35';
    };

    // Get gradient colors based on hover color
    const getGradientColors = (colorClass) => {
        const gradientMap = {
            'text-orange-500': 'from-primary to-secondary',
            'text-blue-400': 'from-blue-light to-blue-dark',
            'text-yellow-400': 'from-accent to-secondary',
            'text-cyan-400': 'from-blue-light to-green-light',
            'text-orange-400': 'from-secondary to-accent',
            'text-blue-500': 'from-blue-dark to-blue-light',
            'text-blue-600': 'from-navyBlue to-blue-dark',
            'text-red-500': 'from-primary to-accent',
            'text-gray-200': 'from-slate to-darkSlate',
            'text-yellow-500': 'from-accent to-primary',
            'text-green-400': 'from-green-light to-green-dark',
            'text-green-500': 'from-green-dark to-green-light',
            'text-purple-400': 'from-primary to-blue-light'
        };
        return gradientMap[colorClass] || 'from-primary to-secondary';
    };

    return (
        <div 
            className="flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`p-4 sm:p-5 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl ${
                isHovered 
                    ? `bg-gradient-to-br ${getGradientColors(hoverColor)}` 
                    : 'bg-white/90 backdrop-blur-sm border border-white/50'
            }`}>
                <Icon 
                    className="text-3xl sm:text-4xl lg:text-5xl transition-all duration-500"
                    style={{ 
                        color: isHovered ? '#ffffff' : getHoverColorValue(hoverColor)
                    }}
                />
            </div>
            <span className={`text-sm sm:text-base mt-3 font-medium transition-all duration-300 ${
                isHovered ? 'text-slate opacity-100 transform scale-105' : 'text-darkSlate opacity-0'
            }`}>
                {name}
            </span>
        </div>
    );
};

export default TechnologySkill; 