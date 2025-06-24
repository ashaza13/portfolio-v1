import React from "react";
import ashaz from "../static/images/ashaz.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-slate to-palantir-dark">
            
            <motion.div
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-light to-palantir-blue mx-auto animate-subtle-pulse"></div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                        {/* Left - About Me Text */}
                        <div className="order-2 lg:order-1">
                            <div className="glass-morphism rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-palantir-blue/10 transition-all duration-500 group">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 gradient-text-accent">
                                    Software Engineer & Problem Solver
                                </h3>
                                
                                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-palantir-light leading-relaxed">
                                    <p className="group-hover:text-white transition-colors duration-300">
                                        Hello! I'm currently a <span className="text-blue-light font-semibold">Software Engineer at Accenture</span>, 
                                        where I develop LLM-powered agents and analytics platforms that support over 14 million users in the public sector.
                                    </p>
                                    
                                    <p className="group-hover:text-white transition-colors duration-300">
                                        My journey in Computer Science began as a child when I was first exposed to WordPress and 
                                        created a website for a science fair. That spark ignited a passion that has only grown stronger.
                                    </p>
                                    
                                    <p className="group-hover:text-white transition-colors duration-300">
                                        I obtained my degree in <span className="text-blue-light font-semibold">Computer Science from Virginia Tech</span> 
                                        and continue to work on exciting projects that push the boundaries of what's possible with technology.
                                    </p>
                                </div>

                                {/* Skills Pills */}
                                <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
                                    {['JavaScript', 'React', 'Python', 'AI/ML', 'Cloud Computing'].map((skill) => (
                                        <span 
                                            key={skill}
                                            className="px-2.5 sm:px-3 py-1 glass-effect-dark text-palantir-light text-xs sm:text-sm rounded-lg hover:bg-palantir-blue/20 hover:text-blue-light transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Right - Picture */}
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-light to-palantir-blue rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-palantir-glow"></div>
                                <img 
                                    src={ashaz} 
                                    alt="Ashaz Ahmed" 
                                    className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-xl sm:rounded-2xl border border-palantir-blue/30 transition-all duration-500 group-hover:scale-105" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default About;