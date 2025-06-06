import React from "react";
import { motion } from "framer-motion";

const projects = [
    { 
        name: "Acadia", 
        description: "Developed an iOS app using Swift, Google Cloud Platform, and NFC technology to automate college classroom attendance tracking, replacing manual roll calls. Deployed at Virginia Tech, where it is actively used by 140+ students and faculty to streamline attendance management. Leveraged NFC card integration to ensure secure and efficient attendance logging, reducing administrative workload for instructors.", 
        technologies: ["Swift", "Google Cloud Platform", "NFC Technology", "iOS Development"], 
        link: "", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/acadia.png?updatedAt=1749160217465", 
        externalURL: "https://www.acadiapresence.com/",
        isAppStore: true,
        duration: "January 2024 – Present"
    },
    { 
        name: "Symbiota", 
        description: "A web application designed to educate individuals on effective recycling methods. Search for common items and determine if it can be recycled at your local recycling center.", 
        technologies: ["AWS Amplify/Lambda", "ReactJS", "REST API", "NodeJS"], 
        link: "https://github.com/ashaza13/symbiota-client", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/symbiotamap.png?updatedAt=1692733900341", 
        externalURL: "https://main.d2sgk48knqno1u.amplifyapp.com/",
        duration: "2023"
    },
    { 
        name: "Spices and Slices", 
        description: "A custom invoice form created to help a mango business. The form is meant to keep track of inventory and gauge interest.", 
        technologies: ["AWS Amplify/Lambda", "ReactJS", "Google Sheets", "NodeJS"], 
        link: "", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/splices.png?updatedAt=1692733900261", 
        externalURL: "https://www.spicesandslices.com/",
        duration: "June 2023 – August 2023"
    },
    { 
        name: "Traffic Light Scenario", 
        description: "A scenario to simulate an autonomous vehicle on a long curved road with 3 different traffic lights. The autonomous vehicle is able to detect the change in color of the traffic light and react accordingly.", 
        technologies: ["MATLAB", "TensorFlow", "Sensor Fusion"], 
        link: "https://github.com/ashaza13/MATLAB-Traffic-Light-Simulation", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/chase.png?updatedAt=1692733900167", 
        externalURL:"",
        duration: "2023"
    },
    { 
        name: "Healthy", 
        description: "A full-stack iOS application that allows users to count calories and find recipes to live an overall healthier lifestyle.", 
        technologies: ["Swift", "Apple Health Kit", "UIKit", "Google Firebase"], 
        link: "", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/firebase.png?updatedAt=1692733900123", 
        externalURL:"",
        duration: "2022"
    },
];

const Projects = () => {
    return (
        <section id="work" className="bg-black py-20 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="mx-4 max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="w-24 h-0.5 bg-gray-600 mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            A showcase of my recent work in software development, AI/ML, and mobile applications.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col">
                                    {/* Project Image */}
                                    {project.imageUrl && (
                                        <div className="relative overflow-hidden rounded-t-2xl">
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.name}
                                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                                        </div>
                                    )}
                                    
                                    {/* Project Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                                                    {project.name}
                                                </h3>
                                                <span className="text-sm text-gray-500">{project.duration}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                                            {project.description}
                                        </p>
                                        
                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Links */}
                                        <div className="flex gap-3 mt-auto">
                                            {project.link && (
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105"
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
                                                    className="flex items-center px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
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
    );
};

export default Projects; 