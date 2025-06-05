import React from "react";

const TechnologySkill = ({ icon: Icon, name, hoverColor = "text-blue-500" }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer">
            <div className="bg-gray-700 rounded-lg p-4 drop-shadow-lg transition-all duration-300 group-hover:bg-gray-600">
                <Icon className={`text-5xl text-gray-400 group-hover:${hoverColor} transition-colors duration-300`} />
            </div>
            <span className="text-white text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
            </span>
        </div>
    );
};

export default TechnologySkill; 