import React from "react";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";

const Contact = () => {
    const glitchButton = useGlitch({ playMode: "hover" });

    return (
        <section id="contact" className="bg-gradient-to-br from-lightBlue to-warm-white py-20 sm:py-24 lg:py-32 xl:py-40">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="flex justify-center mx-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl text-center">
                        {/* Section Header */}
                        <div className="mb-12 sm:mb-16 lg:mb-20">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate mb-4">Get In Touch</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                        </div>
                        
                        {/* Main Content Card */}
                        <div className="headspace-card p-8 sm:p-12 lg:p-16 mb-8 sm:mb-12">
                            <div className="mb-8 sm:mb-12">
                                <h3 className="text-xl sm:text-2xl font-semibold text-slate mb-6 sm:mb-8">
                                    Let's Build Something Amazing Together
                                </h3>
                                <div className="max-w-2xl mx-auto px-2">
                                    <p className="text-sm sm:text-base text-darkSlate leading-relaxed mb-4 sm:mb-5">
                                        I'm currently open to new opportunities and exciting projects. Whether you're looking for a software engineer 
                                        with AI expertise or want to collaborate on innovative solutions, I'd love to hear from you.
                                    </p>
                                    <p className="text-sm sm:text-base text-darkSlate leading-relaxed">
                                        Feel free to reach out if you have any questions or just want to connect!
                                    </p>
                                </div>
                            </div>
                            
                            <a href="mailto:ahmed.ashaz9@gmail.com" target="_blank" rel="noopener noreferrer">
                                <button 
                                    ref={glitchButton.ref} 
                                    className="headspace-button px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold"
                                >
                                    Contact Me
                                </button>
                            </a>
                        </div>
                        
                        {/* Contact Methods */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="group"
                            >
                                <a 
                                    href="mailto:ahmed.ashaz9@gmail.com" 
                                    className="block headspace-card p-6 hover:scale-105 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-sm font-semibold text-slate mb-2">Email</h4>
                                    <p className="text-xs text-darkSlate">ahmed.ashaz9@gmail.com</p>
                                </a>
                            </motion.div>
                            
                            {/* LinkedIn */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="group"
                            >
                                <a 
                                    href="https://linkedin.com/in/ashazahmed" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block headspace-card p-6 hover:scale-105 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-light to-blue-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-sm font-semibold text-slate mb-2">LinkedIn</h4>
                                    <p className="text-xs text-darkSlate">Connect with me</p>
                                </a>
                            </motion.div>
                            
                            {/* GitHub */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="group"
                            >
                                <a 
                                    href="https://github.com/ashaza13" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block headspace-card p-6 hover:scale-105 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-slate to-darkSlate rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-sm font-semibold text-slate mb-2">GitHub</h4>
                                    <p className="text-xs text-darkSlate">View my projects</p>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;