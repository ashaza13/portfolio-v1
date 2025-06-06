import React from "react";
import { useGlitch } from "react-powerglitch";

const Hero = () => {
    const glitch = useGlitch({ glitchTimeSpan: { "start": 0.7, "end": 0.9 }, timing: { "duration": 3450 } });
    const glitchButton = useGlitch({ playMode: "hover" });

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-6 lg:px-16 z-10">
            
            <div className="max-w-6xl text-center mb-20">
                {/* Main heading with FLUXC-style typography */}
                <div className="mb-8 animate-slide-up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Ashaz Ahmed
                    </h1>
                </div>
                
                {/* Description */}
                <div className="mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
                        Hi, I'm Ashaz Ahmed - a Software Engineer at Accenture specializing in AI and data analytics.
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I develop intelligent systems that serve millions of users in the public sector.
                    </p>
                </div>
                
                {/* CTA Button */}
                <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <a href="#work">
                        <button 
                            ref={glitchButton.ref} 
                            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                        >
                            View My Work
                        </button>
                    </a>
                </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full animate-slide-up" style={{animationDelay: '0.6s'}}>
                {/* AI Development Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="mb-6">
                        {/* AI Icon */}
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Developing LLM-powered agents and intelligent systems that enhance decision-making processes across industries.
                    </p>
                </div>
                
                {/* Full-Stack Development Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="mb-6">
                        {/* Code Icon */}
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Development</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Building scalable analytics platforms and web applications that support over 14 million users in the public sector.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Hero;