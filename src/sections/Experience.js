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
        <section id="experience">
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "tween" }}
            >
                <div className="flex flex-col md:flex-row justify-center mx-4 py-20 lg:py-28">
                    <div className="max-w-lg my-10 text-left">
                        <div className="relative flex items-center">
                            <p className="text-orange-600 font-bold text-2xl mr-2">02. </p>
                            <h1 className="mr-4 text-white font-bold text-2xl">Where I've Worked</h1>
                            <div className="max-w-sm flex-grow border-t-2 border-slate"></div>
                        </div>
                        <div>
                            <ul className="mt-6 text-lightGray">
                                {experiences.map((exp) => (
                                    <li 
                                        key={exp.id}
                                        className={openTab === exp.id ? 
                                            "justify-center border-l-2 px-2 py-4 transition duration-500 text-orange-600 bg-slate border-orange-600" : 
                                            "justify-center border-l-2 px-2 py-4 transition duration-500 hover:bg-slate"
                                        }
                                    >
                                        <a 
                                            href="#" 
                                            className="transition duration-500 hover:text-orange-600" 
                                            onClick={e => { e.preventDefault(); setOpenTab(exp.id); }}
                                        >
                                            {exp.company}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {experiences.map((exp) => (
                        <div 
                            key={exp.id}
                            className={openTab === exp.id ? "transition block max-w-lg md:mt-24 mx-4" : "transition hidden"}
                        >
                            <h1 className="text-white font-bold text-xl">{exp.position}</h1>
                            <h2 className="text-lg py-2 text-lightGray">{exp.duration}</h2>
                            <h3 className="text-md text-orange-600 mb-2">{exp.location}</h3>
                            <ul className="py-2 list-disc list-inside text-white">
                                {exp.responsibilities.map((responsibility, index) => (
                                    <li key={index} className="py-1">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
};

export default Experience;