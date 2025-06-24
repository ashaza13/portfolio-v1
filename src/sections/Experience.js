import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
    const [openTab, setOpenTab] = useState(1);

    const experiences = [
        {
            id: 1,
            company: "Accenture",
            position: "Software Engineer",
            duration: "February 2024 - Present",
            location: "Arlington, VA",
            responsibilities: [
                "Developed a serverless data analytics platform in AWS SageMaker Studio, used by 100+ users, improving accessibility and reducing Python package installation time from 2 months to 2 weeks",
                "Built LLM-powered agents using LangChain to analyze structured data from over 14 million daily users, delivering critical insights to stakeholders in the public sector",
                "Created automated data visualization pipelines that reduced reporting time by 75%, directly supporting high-impact decision-making processes",
                "Designed and implemented scalable cloud infrastructure using AWS services (Lambda, S3, RDS) to handle massive data workloads efficiently",
                "Collaborated closely with cross-functional teams to deliver mission-critical analytics solutions under tight deadlines"
            ]
        },
        {
            id: 2,
            company: "CTI",
            position: "Software Engineer Intern",
            duration: "June 2022 - August 2023",
            location: "Falls Church, VA (remote)",
            responsibilities: [
                "Worked on the ISEE contract with the Defense Intelligence Agency (DIA) concerning the automation of admin account creation along with identity, credential, and access management (ICAM) for all other users",
                "Developed automation scripts using Python and PowerShell to streamline user provisioning processes, reducing manual effort by 60%",
                "Implemented security protocols and compliance measures for government systems, ensuring adherence to strict federal standards",
                "Created comprehensive documentation and testing procedures for deployment in secure government environments"
            ]
        },
        {
            id: 3,
            company: "Virginia Tech",
            position: "Research Assistant",
            duration: "December 2022 - Present",
            location: "Blacksburg, VA",
            responsibilities: [
                "Conducted research for the Cadillac Lyric EcoCar 4-year design competition sponsored by General Electric",
                "Developed machine learning models to optimize electric vehicle performance and energy efficiency using Python and TensorFlow",
                "Designed and implemented data collection systems for vehicle telemetry and performance analysis",
                "Collaborated with interdisciplinary teams to integrate AI-driven solutions into automotive engineering challenges"
            ]
        }
    ];

    return (
        <section id="experience" className="bg-gradient-to-b from-darkSlate to-slate py-16 sm:py-20 lg:py-24 xl:py-32">
            <motion.div
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Experience</h2>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-light to-palantir-blue mx-auto mb-6 animate-subtle-pulse"></div>
                        <p className="text-sm sm:text-base text-palantir-light max-w-2xl mx-auto leading-relaxed px-2">
                            My professional journey in software engineering and technology innovation.
                        </p>
                    </div>
                    
                    {/* Experience Content */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Experience Navigation */}
                        <div className="lg:w-1/3">
                            {/* Mobile: Horizontal scroll tabs */}
                            <div className="lg:hidden">
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {experiences.map((exp) => (
                                        <button 
                                            key={exp.id}
                                            className={`flex-shrink-0 px-3 py-2 rounded-lg border text-sm transition-all duration-300 ${
                                                openTab === exp.id 
                                                    ? "bg-gradient-to-r from-palantir-blue to-palantir-navy border-blue-light text-white palantir-glow-sm" 
                                                    : "glass-effect-dark text-palantir-light hover:text-white hover:bg-palantir-blue/20"
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
                                                        ? "bg-gradient-to-r from-palantir-blue to-palantir-navy border-blue-light text-white scale-105 palantir-glow-md" 
                                                        : "glass-effect-dark text-palantir-light hover:text-white hover:bg-palantir-blue/20 hover:scale-102"
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
                        
                        {/* Experience Details */}
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
                                    className={`${openTab === exp.id ? "block" : "hidden"}`}
                                >
                                    <div className="glass-morphism rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-palantir-blue/10 transition-all duration-300">
                                        {/* Header */}
                                        <div className="mb-6 sm:mb-8">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                                <h3 className="text-xl sm:text-2xl font-semibold gradient-text-accent mb-1 sm:mb-0">
                                                    {exp.position} @ {exp.company}
                                                </h3>
                                                <span className="text-sm text-blue-light font-medium">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                            <p className="text-sm text-palantir-light">
                                                {exp.location}
                                            </p>
                                        </div>
                                        
                                        {/* Responsibilities */}
                                        <div>
                                            <h4 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">Key Achievements</h4>
                                            <ul className="space-y-3 sm:space-y-4">
                                                {exp.responsibilities.map((responsibility, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ 
                                                            opacity: openTab === exp.id ? 1 : 0,
                                                            x: openTab === exp.id ? 0 : 10
                                                        }}
                                                        transition={{ 
                                                            duration: 0.3,
                                                            delay: openTab === exp.id ? 0.2 + (index * 0.1) : 0
                                                        }}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-light to-palantir-blue rounded-full mt-2 flex-shrink-0 animate-subtle-pulse"></div>
                                                        <p className="text-sm sm:text-base text-palantir-light leading-relaxed hover:text-white transition-colors duration-300">
                                                            {responsibility}
                                                        </p>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
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