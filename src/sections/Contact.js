import React from "react";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";

const Contact = () => {
    const glitchButton = useGlitch({ playMode: "hover" });

    return (
        <section id="contact" className="bg-black py-20 sm:py-24 lg:py-32 xl:py-40">
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
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                            <div className="w-24 h-0.5 bg-gray-600 mx-auto"></div>
                        </div>
                        
                        <div className="mb-8 sm:mb-12">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                                Let's Build Something Amazing Together
                            </h3>
                            <div className="max-w-2xl mx-auto px-2">
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-5">
                                    I'm currently open to new opportunities and exciting projects. Whether you're looking for a software engineer 
                                    with AI expertise or want to collaborate on innovative solutions, I'd love to hear from you.
                                </p>
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                    Feel free to reach out if you have any questions or just want to connect!
                                </p>
                            </div>
                        </div>
                        
                        <a href="mailto:ahmed.ashaz9@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button 
                                ref={glitchButton.ref} 
                                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
                            >
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;