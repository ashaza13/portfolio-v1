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
            color: "from-primary to-secondary",
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
            color: "from-blue-light to-blue-dark",
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
            color: "from-green-light to-green-dark",
            responsibilities: [
                "Conducted research for the Cadillac Lyric EcoCar 4-year design competition sponsored by General Electric",
                "Designed and researched different connected and automated vehicle systems (CAVs) to improve overall fuel efficiency",
                "Developed autonomous vehicle driving scenarios using tools such as MATLAB, Simulink, and TensorFlow"
            ]
        }
    ];

    return (
        <section id="experience" className="bg-gradient-to-br from-warm-white to-warm-gray py-16 sm:py-20 lg:py-24 xl:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate mb-4">Where I've Worked</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Company Navigation */}
                        <div className="lg:w-1/3">
                            {/* Mobile: Horizontal scroll tabs */}
                            <div className="lg:hidden">
                                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                    {experiences.map((exp) => (
                                        <button 
                                            key={exp.id}
                                            className={`flex-shrink-0 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-300 ${
                                                openTab === exp.id 
                                                    ? "bg-white text-slate border-white shadow-lg" 
                                                    : "bg-white/70 border-white/50 text-darkSlate hover:bg-white hover:shadow-lg"
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
                                <ul className="space-y-3">
                                    {experiences.map((exp) => (
                                        <li key={exp.id}>
                                            <button 
                                                className={`w-full text-left px-6 py-4 rounded-2xl border transition-all duration-500 ease-in-out transform ${
                                                    openTab === exp.id 
                                                        ? "bg-white border-white text-slate scale-105 shadow-xl" 
                                                        : "bg-white/70 border-white/50 text-darkSlate hover:bg-white hover:scale-102 hover:shadow-lg"
                                                }`}
                                                onClick={() => setOpenTab(exp.id)}
                                            >
                                                <div className="font-semibold text-base">{exp.company}</div>
                                                <div className="text-sm opacity-75 mt-1">{exp.position}</div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {/* Experience Content */}
                        <div className="lg:w-2/3">
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
                                    className={`${
                                        openTab === exp.id ? "block" : "hidden"
                                    }`}
                                >
                                    <div className="headspace-card p-6 sm:p-8 lg:p-10">
                                        <div className="flex items-start mb-6">
                                            <div className={`w-3 h-12 bg-gradient-to-b ${exp.color} rounded-full mr-4 mt-1`}></div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-semibold text-slate mb-2">{exp.position}</h3>
                                                <p className="text-base sm:text-lg text-primary font-medium mb-1">{exp.company}</p>
                                                <p className="text-sm sm:text-base text-darkSlate mb-1">{exp.duration}</p>
                                                <p className="text-sm text-customGray">{exp.location}</p>
                                            </div>
                                        </div>
                                        
                                        <ul className="space-y-3 sm:space-y-4">
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
                                                    <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm sm:text-base text-darkSlate leading-relaxed">{responsibility}</span>
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