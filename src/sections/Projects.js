import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        { 
            id: 1, 
            title: "Acadia",
            description: "A mobile app for tracking National Park adventures built with React Native. Features include park discovery, achievement tracking, and social sharing capabilities.",
            technologies: ["React Native", "JavaScript", "MongoDB", "Express.js", "iOS/Android"],
            link: "https://github.com/ashazahmed/acadia",
            imageUrl: "https://ik.imagekit.io/qysd8alv5/acadia.png?updatedAt=1701903600000",
            externalURL: "https://www.acadiapresence.com/",
            isAppStore: true,
            duration: "January 2024 – Present"
        },
        { 
            id: 2, 
            title: "Symbiota Map",
            description: "Interactive mapping application for biodiversity data visualization. Built with React and Mapbox GL JS to display species distribution and ecological data.",
            technologies: ["React", "Mapbox GL JS", "Node.js", "PostgreSQL", "AWS"],
            link: "https://github.com/ashazahmed/symbiota-map",
            imageUrl: "https://ik.imagekit.io/qysd8alv5/symbiotamap.png?updatedAt=1692733900341", 
            externalURL: "https://main.d2sgk48knqno1u.amplifyapp.com/",
            duration: "2023"
        },
        { 
            id: 3, 
            title: "Spices & Slices",
            description: "Full-stack restaurant website with online ordering system. Features menu management, order processing, and customer authentication.",
            technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API"],
            link: "https://github.com/ashazahmed/spices-slices",
            imageUrl: "https://ik.imagekit.io/qysd8alv5/splices.png?updatedAt=1692733900261", 
            externalURL: "https://www.spicesandslices.com/",
            duration: "June 2023 – August 2023"
        },
        { 
            id: 4, 
            title: "Chase Bank Clone",
            description: "Modern banking interface clone built with React and styled-components. Demonstrates advanced UI/UX design and responsive development skills.",
            technologies: ["React", "Styled Components", "JavaScript", "CSS3", "Responsive Design"],
            link: "https://github.com/ashazahmed/chase-clone",
            imageUrl: "https://ik.imagekit.io/qysd8alv5/chase.png?updatedAt=1692733900167", 
            externalURL:"",
            duration: "2023"
        },
        { 
            id: 5, 
            title: "Firebase Chat App",
            description: "Real-time chat application built with React and Firebase. Features include user authentication, real-time messaging, and file sharing.",
            technologies: ["React", "Firebase", "JavaScript", "CSS3", "Real-time Database"],
            link: "https://github.com/ashazahmed/firebase-chat",
            imageUrl: "https://ik.imagekit.io/qysd8alv5/firebase.png?updatedAt=1692733900123", 
            externalURL:"",
            duration: "2022"
        },
    ];

    return (
        <section id="work" className="bg-gradient-to-b from-slate to-palantir-dark py-16 sm:py-20 lg:py-24 xl:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-light to-palantir-blue mx-auto mb-6 animate-subtle-pulse"></div>
                        <p className="text-sm sm:text-base text-palantir-light max-w-2xl mx-auto leading-relaxed px-2">
                            A collection of projects showcasing my expertise in full-stack development and modern web technologies.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    type: "tween" 
                                }}
                                className="glass-morphism rounded-xl sm:rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group hover:palantir-glow-sm"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Project Image */}
                                    {project.imageUrl && (
                                        <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.title}
                                                className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-palantir-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    )}
                                    
                                    {/* Project Content */}
                                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                        {/* Header */}
                                        <div className="mb-3 sm:mb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:gradient-text-accent transition-all duration-300">
                                                    {project.title}
                                                </h3>
                                                <span className="text-xs sm:text-sm text-blue-light font-medium">
                                                    {project.duration}
                                                </span>
                                            </div>
                                            <p className="text-sm sm:text-base text-palantir-light leading-relaxed group-hover:text-white transition-colors duration-300">
                                                {project.description}
                                            </p>
                                        </div>
                                        
                                        {/* Technologies */}
                                        <div className="mb-4 sm:mb-6">
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-2 py-1 text-xs sm:text-sm glass-effect-dark text-palantir-light rounded-md hover:bg-palantir-blue/20 hover:text-blue-light transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Links */}
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                                            {project.link && (
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-palantir-blue to-palantir-navy text-white text-sm font-medium rounded-lg hover:from-blue-light hover:to-palantir-blue transition-all duration-300 group/link hover:scale-105"
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                    Code
                                                </a>
                                            )}
                                            
                                            {project.externalURL && (
                                                <a 
                                                    href={project.externalURL} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 glass-effect-dark text-palantir-light text-sm font-medium rounded-lg hover:bg-palantir-blue/20 hover:text-white transition-all duration-300 group/link hover:scale-105"
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    {project.isAppStore ? "App Store" : "Live Demo"}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default Projects; 