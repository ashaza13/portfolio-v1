import React from "react";
import ashaz from "../static/images/ashaz.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="relative py-20 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-warm-gray to-lightBlue">
            
            <motion.div
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="mx-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                        {/* Left - About Me Text */}
                        <div className="order-2 lg:order-1">
                            <div className="headspace-card p-6 sm:p-8 lg:p-10">
                                <h3 className="text-xl sm:text-2xl font-semibold text-slate mb-4 sm:mb-6">
                                    Software Engineer & Problem Solver
                                </h3>
                                
                                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-darkSlate leading-relaxed">
                                    <p>
                                        Hello! I'm currently a <span className="text-primary font-medium">Software Engineer at Accenture</span>, 
                                        where I develop LLM-powered agents and analytics platforms that support over 14 million users in the public sector.
                                    </p>
                                    
                                    <p>
                                        My journey in Computer Science began as a child when I was first exposed to WordPress and 
                                        created a website for a science fair. That spark ignited a passion that has only grown stronger.
                                    </p>
                                    
                                    <p>
                                        I obtained my degree in <span className="text-primary font-medium">Computer Science from Virginia Tech</span> 
                                        and continue to work on exciting projects that push the boundaries of what's possible with technology.
                                    </p>
                                </div>

                                {/* Skills Pills - Headspace style */}
                                <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
                                    {[
                                        { name: 'JavaScript', color: 'from-primary to-secondary' },
                                        { name: 'React', color: 'from-blue-light to-blue-dark' },
                                        { name: 'Python', color: 'from-green-light to-green-dark' },
                                        { name: 'AI/ML', color: 'from-primary to-accent' },
                                        { name: 'Cloud Computing', color: 'from-blue-light to-primary' }
                                    ].map((skill) => (
                                        <span 
                                            key={skill.name}
                                            className={`px-4 py-2 bg-gradient-to-r ${skill.color} text-white text-xs sm:text-sm rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Right - Picture */}
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative float-gentle">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-light/20 rounded-3xl transform rotate-6 blur-lg"></div>
                                <img 
                                    src={ashaz} 
                                    alt="Ashaz Ahmed" 
                                    className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-3xl border-4 border-white shadow-xl" 
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