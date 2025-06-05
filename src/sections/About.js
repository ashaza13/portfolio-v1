import React from "react";
import ashaz from "../static/images/ashaz.jpg";
import { motion } from "framer-motion";
import { 
    FaJava, 
    FaPython, 
    FaJs, 
    FaReact, 
    FaAws, 
    FaLinux, 
    FaDocker 
} from "react-icons/fa";
import { SiFlask, SiGooglecloud, SiMicrosoftazure, SiSwift, SiMysql, SiTensorflow, SiPytorch } from "react-icons/si";
import TechnologyWeb from "../components/TechnologyWeb";

const About = () => {
    const technologies = [
        { icon: FaJava, name: "Java", hoverColor: "text-orange-500" },
        { icon: FaPython, name: "Python", hoverColor: "text-blue-400" },
        { icon: FaJs, name: "JavaScript", hoverColor: "text-yellow-400" },
        { icon: FaReact, name: "React", hoverColor: "text-cyan-400" },
        { icon: FaAws, name: "AWS", hoverColor: "text-orange-400" },
        { icon: SiGooglecloud, name: "Google Cloud", hoverColor: "text-blue-500" },
        { icon: SiMicrosoftazure, name: "Azure", hoverColor: "text-blue-600" },
        { icon: SiSwift, name: "Swift", hoverColor: "text-orange-500" },
        { icon: SiMysql, name: "SQL", hoverColor: "text-blue-500" },
        { icon: SiTensorflow, name: "TensorFlow", hoverColor: "text-orange-500" },
        { icon: SiPytorch, name: "PyTorch", hoverColor: "text-red-500" },
        { icon: SiFlask, name: "Flask", hoverColor: "text-gray-200" },
        { icon: FaLinux, name: "Linux", hoverColor: "text-yellow-500" },
        { icon: FaDocker, name: "Docker", hoverColor: "text-blue-500" },
    ];

    return (
        <section id="about">
            <motion.div
                initial={{ opacity:0, y: "100%"}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "tween" }}
            >
                <div className="mx-4 pt-40 pb-12 lg:py-28 max-w-6xl mx-auto">
                    {/* Container for all 3 sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Top Left - About Me Text */}
                        <div className="text-left">
                            <div className="relative flex items-center mb-6">
                                <p className="text-orange-600 font-bold text-2xl mr-2">01.</p>
                                <h1 className="mr-4 text-white font-bold text-2xl">About Me</h1>
                                <div className="max-w-sm flex-grow border-t-2 border-slate"></div>
                            </div>
                            <p className="text-white mb-4">Hello! I am currently a Software Engineer at Accenture. I obtained my degree in Computer Science from Virginia Tech. My interest in Computer Science started as child when I was exposed to Wordpress and created a website for a science fair.</p>
                            <p className="text-white">I am very passionate about Computer Science.
                                I have worked on and continue to work on many projects to expand my knowledge.
                                Recently, I've been developing LLM-powered agents and analytics platforms, supporting over 14 million users in the public sector. 
                            </p>
                        </div>
                        
                        {/* Top Right - Picture */}
                        <div className="flex justify-center lg:justify-end">
                            <img src={ashaz} alt="ashaz" className="w-72 md:max-w-sm rounded-md drop-shadow-lg transition hover:-translate-x-2 hover:-translate-y-2" />
                        </div>
                    </div>
                    
                    {/* Bottom Section - Technologies Web (spans full width) */}
                    <div className="w-full">
                        <TechnologyWeb technologies={technologies} />
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default About;