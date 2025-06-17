import React from "react";
import { useGlitch } from "react-powerglitch";

const Hero = () => {
    const glitch = useGlitch({ glitchTimeSpan: { "start": 0.7, "end": 0.9 }, timing: { "duration": 3450 } });
    const glitchButton = useGlitch({ playMode: "hover" });

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-16 py-20 sm:py-24 lg:py-32 z-10">
            
            <div className="max-w-6xl text-center mb-16 sm:mb-20 lg:mb-24">
                {/* Main heading with Headspace-style typography */}
                <div className="mb-8 sm:mb-10 animate-slide-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate mb-6 sm:mb-8 leading-tight">
                        Ashaz Ahmed
                    </h1>
                </div>
                
                {/* Description */}
                <div className="mb-10 sm:mb-12 lg:mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <p className="text-base sm:text-lg text-darkSlate max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
                        Hi, I'm Ashaz Ahmed - a Software Engineer at Accenture specializing in AI and data analytics.
                    </p>
                    <p className="text-base sm:text-lg text-darkSlate max-w-2xl mx-auto leading-relaxed px-2">
                        I develop intelligent systems that serve millions of users in the public sector.
                    </p>
                </div>
                
                {/* CTA Button - Headspace style */}
                <div className="animate-slide-up mb-16 sm:mb-20 lg:mb-24" style={{animationDelay: '0.4s'}}>
                    <a href="#work">
                        <button 
                            ref={glitchButton.ref} 
                            className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-white font-semibold rounded-full hover:bg-orange-dark transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            View My Work
                        </button>
                    </a>
                </div>
            </div>
            
            {/* Feature Cards - Headspace inspired */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl w-full animate-slide-up px-2 sm:px-0" style={{animationDelay: '0.6s'}}>
                {/* AI Development Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/50 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <div className="mb-6 sm:mb-8">
                        {/* AI Icon */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 sm:mb-8 animate-bounce-soft">
                            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate mb-3 sm:mb-4">AI & Machine Learning</h3>
                    </div>
                    <p className="text-base sm:text-lg text-darkSlate leading-relaxed">
                        Developing LLM-powered agents and intelligent systems that enhance decision-making processes across industries.
                    </p>
                </div>
                
                {/* Full-Stack Development Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/50 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <div className="mb-6 sm:mb-8">
                        {/* Code Icon */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-light to-blue-dark rounded-2xl flex items-center justify-center mb-6 sm:mb-8 animate-bounce-soft" style={{animationDelay: '0.5s'}}>
                            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate mb-3 sm:mb-4">Full-Stack Development</h3>
                    </div>
                    <p className="text-base sm:text-lg text-darkSlate leading-relaxed">
                        Building scalable analytics platforms and web applications that support over 14 million users in the public sector.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Hero;