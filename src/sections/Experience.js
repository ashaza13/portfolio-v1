import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
    const [openTab, setOpenTab] = useState(1);

    const experiences = [
        {
            id: 1,
            company: "Accenture Federal Services",
            position: "Data & AI Solutions Architect",
            duration: "February 2024 - Present",
            location: "Arlington, VA",
            responsibilities: [
                "Developed a serverless data analytics platform in AWS SageMaker Studio, used by 100+ users, improving accessibility and reducing Python package installation time from 2 months to 2 weeks",
                "Built a ML data anomaly detection system using a tabular autoencoder model, increasing anomaly detection accuracy by 90% and replacing a manual process with proactive alerts for stakeholders developed with PyTorch, AWS SageMaker, and Oracle Database technology",
                "Designed and deployed an LLM-powered support agent using AWS Lambda, OpenSearch, and GPT-4o, reducing FAFSA issue resolution time by 90% and handling 1.4 million support calls while reducing human agent workload",
                "Deployed a customer-facing LLM chatbot using AWS Lambda, EventBridge, Kendra, and LangChain, assisting 14 million users in understanding financial aid loan statuses and troubleshooting FAFSA form issues"
            ]
        },
        {
            id: 2,
            company: "GDIT",
            position: "Software Developer Associate",
            duration: "June 2022 - August 2023",
            location: "Falls Church, VA (remote)",
            responsibilities: [
                "Worked on the ISEE contract with the Defense Intelligence Agency (DIA) concerning the automation of admin account creation along with identity, credential, and access management (ICAM) for all other users",
                "Collaborated and led a team of 3 software developer interns to write and document PowerShell scripts to automate the migration of thousands of over-seas Department of Defense employees MS exchange email accounts to improve overall security",
                "Engaged with stakeholders throughout the company to deliver regular progress updates, manage expectations, and build transparency across the organization"
            ]
        },
        {
            id: 3,
            company: "HEVT",
            position: "Undergraduate Researcher",
            duration: "December 2022 - Present",
            location: "Blacksburg, VA",
            responsibilities: [
                "Conducted research for the Cadillac Lyric EcoCar 4-year design competition sponsored by General Electric",
                "Designed and researched different connected and automated vehicle systems (CAVs) to improve overall fuel efficiency",
                "Developed autonomous vehicle driving scenarios using tools such as MATLAB, Simulink, and TensorFlow"
            ]
        }
    ];

    return (
        <section id="experience" className="bg-black py-20 sm:py-24 lg:py-32 xl:py-40">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="mx-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Where I've Worked</h2>
                        <div className="w-24 h-0.5 bg-gray-600 mx-auto"></div>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Company Navigation */}
                        <div className="lg:w-1/3">
                            {/* Mobile: Horizontal scroll tabs */}
                            <div className="lg:hidden">
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {experiences.map((exp) => (
                                        <button 
                                            key={exp.id}
                                            className={`flex-shrink-0 px-4 py-2 rounded-lg border text-sm transition-all duration-300 ${
                                                openTab === exp.id 
                                                    ? "bg-gray-800 border-gray-700 text-white" 
                                                    : "bg-gray-900/30 border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/50"
                                            }`}
                                            onClick={() => setOpenTab(exp.id)}
                                        >
                                            {exp.company}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop: Vertical tabs */}
                            <div className="hidden lg:block">
                                <ul className="space-y-2">
                                    {experiences.map((exp) => (
                                        <li key={exp.id}>
                                            <button 
                                                className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-500 ease-in-out transform ${
                                                    openTab === exp.id 
                                                        ? "bg-gray-800 border-gray-700 text-white scale-105 shadow-lg" 
                                                        : "bg-gray-900/30 border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/50 hover:scale-102"
                                                }`}
                                                onClick={() => setOpenTab(exp.id)}
                                            >
                                                <div className="font-medium">{exp.company}</div>
                                                <div className="text-sm opacity-75">{exp.position}</div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {/* Experience Content */}
                        <div className="lg:w-2/3 relative min-h-[300px] sm:min-h-[400px]">
                            {experiences.map((exp) => (
                                <motion.div 
                                    key={exp.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ 
                                        opacity: openTab === exp.id ? 1 : 0,
                                        x: openTab === exp.id ? 0 : 20
                                    }}
                                    transition={{ 
                                        duration: 0.4, 
                                        ease: "easeInOut",
                                        delay: openTab === exp.id ? 0.1 : 0
                                    }}
                                    className={`absolute inset-0 ${
                                        openTab === exp.id ? "pointer-events-auto" : "pointer-events-none"
                                    }`}
                                >
                                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{exp.position}</h3>
                                        <p className="text-base sm:text-lg text-gray-300 mb-1">{exp.duration}</p>
                                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{exp.location}</p>
                                        
                                        <ul className="space-y-2 sm:space-y-3">
                                            {exp.responsibilities.map((responsibility, index) => (
                                                <motion.li 
                                                    key={index} 
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ 
                                                        opacity: openTab === exp.id ? 1 : 0,
                                                        y: openTab === exp.id ? 0 : 10
                                                    }}
                                                    transition={{ 
                                                        duration: 0.3,
                                                        delay: openTab === exp.id ? 0.2 + (index * 0.1) : 0
                                                    }}
                                                >
                                                    <span className="text-gray-500 mr-3 mt-1 sm:mt-2 text-sm">▶</span>
                                                    <span className="text-sm sm:text-base text-gray-400 leading-relaxed">{responsibility}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default Experience;