import React from "react";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";

const Contact = () => {
    const glitchButton = useGlitch({ playMode: "hover" });

    return (
        <section id="contact" className="bg-gradient-to-b from-palantir-dark to-darkSlate py-16 sm:py-20 lg:py-24 xl:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Section Header */}
                    <div className="mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-light to-palantir-blue mx-auto mb-6 animate-subtle-pulse"></div>
                    </div>

                    {/* Main Content */}
                    <div className="glass-morphism rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 hover:bg-palantir-blue/10 transition-all duration-500">
                        <div className="max-w-2xl mx-auto">
                            <div className="mb-8 sm:mb-10 lg:mb-12">
                                <p className="text-base sm:text-lg text-palantir-light leading-relaxed mb-4 hover:text-white transition-colors duration-300">
                                    I'm always interested in new opportunities and exciting projects. Whether you're looking for a software engineer, need help with AI/ML solutions, or just want to connect, I'd love to hear from you.
                                </p>
                                <p className="text-base sm:text-lg text-palantir-light leading-relaxed hover:text-white transition-colors duration-300">
                                    Let's discuss how we can bring your ideas to life with cutting-edge technology solutions.
                                </p>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="mb-8 sm:mb-10">
                                <a href="mailto:ahmed.ashaz9@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <button 
                                        ref={glitchButton.ref} 
                                        className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-light to-palantir-blue text-white font-semibold rounded-lg hover:from-accent hover:to-blue-dark transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl palantir-glow-sm hover:palantir-glow-md transform hover:scale-105"
                                    >
                                        <span className="flex items-center justify-center">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Get In Touch
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-light/20 to-palantir-blue/20 rounded-lg animate-palantir-glow"></div>
                                    </button>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center gap-4 sm:gap-6">
                                <a 
                                    href="https://linkedin.com/in/ashaz-ahmed" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-palantir-blue to-palantir-navy rounded-xl hover:from-blue-light hover:to-palantir-blue transition-all duration-300 hover:scale-110 hover:palantir-glow-sm"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>

                                <a 
                                    href="https://github.com/ashazahmed" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-palantir-blue to-palantir-navy rounded-xl hover:from-blue-light hover:to-palantir-blue transition-all duration-300 hover:scale-110 hover:palantir-glow-sm"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default Contact;