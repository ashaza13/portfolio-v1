import React from "react";
import ashaz from "../static/images/ashaz.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="relative py-20 sm:py-24 lg:py-32 xl:py-40 bg-black">
            
            <motion.div
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="mx-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
                        <div className="w-24 h-0.5 bg-gray-600 mx-auto"></div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                        {/* Left - About Me Text */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-gray-900/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-800">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                                    Software Engineer & Problem Solver
                                </h3>
                                
                                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-400 leading-relaxed">
                                    <p>
                                        Hello! I'm currently a <span className="text-white font-medium">Software Engineer at Accenture</span>, 
                                        where I develop LLM-powered agents and analytics platforms that support over 14 million users in the public sector.
                                    </p>
                                    
                                    <p>
                                        My journey in Computer Science began as a child when I was first exposed to WordPress and 
                                        created a website for a science fair. That spark ignited a passion that has only grown stronger.
                                    </p>
                                    
                                    <p>
                                        I obtained my degree in <span className="text-white font-medium">Computer Science from Virginia Tech</span> 
                                        and continue to work on exciting projects that push the boundaries of what's possible with technology.
                                    </p>
                                </div>

                                {/* Skills Pills */}
                                <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
                                    {['JavaScript', 'React', 'Python', 'AI/ML', 'Cloud Computing'].map((skill) => (
                                        <span 
                                            key={skill}
                                            className="px-2.5 sm:px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-lg border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Right - Picture */}
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative">
                                <img 
                                    src={ashaz} 
                                    alt="Ashaz Ahmed" 
                                    className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-xl sm:rounded-2xl border border-gray-800" 
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