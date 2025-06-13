import React from "react";
import { useGlitch } from "react-powerglitch";

const Hero = () => {
    const glitch = useGlitch({ glitchTimeSpan: { "start": 0.7, "end": 0.9 }, timing: { "duration": 3450 } });
    const glitchButton = useGlitch({ playMode: "hover" });

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 z-10">
            
            <div className="max-w-6xl text-center mb-12 sm:mb-16 lg:mb-20">
                {/* Main heading with FLUXC-style typography */}
                <div className="mb-6 sm:mb-8 animate-slide-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Ashaz Ahmed
                    </h1>
                </div>
                
                {/* Description */}
                <div className="mb-8 sm:mb-10 lg:mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-3 sm:mb-4 px-2">
                        Hi, I'm Ashaz Ahmed - a Software Engineer at Accenture specializing in AI and data analytics.
                    </p>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                        I develop intelligent systems that serve millions of users in the public sector.
                    </p>
                </div>
                
                {/* CTA Button */}
                <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <a href="#work">
                        <button 
                            ref={glitchButton.ref} 
                            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
                        >
                            View My Work
                        </button>
                    </a>
                </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl w-full animate-slide-up px-2 sm:px-0" style={{animationDelay: '0.6s'}}>
                {/* AI Development Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="mb-4 sm:mb-6">
                        {/* AI Icon */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">AI & Machine Learning</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        Developing LLM-powered agents and intelligent systems that enhance decision-making processes across industries.
                    </p>
                </div>
                
                {/* Full-Stack Development Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="mb-4 sm:mb-6">
                        {/* Code Icon */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Full-Stack Development</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        Building scalable analytics platforms and web applications that support over 14 million users in the public sector.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Hero;