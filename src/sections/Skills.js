import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    FaJava, 
    FaPython, 
    FaJs, 
    FaReact, 
    FaAws, 
    FaLinux, 
    FaDocker,
    FaNodeJs,
    FaGitAlt,
    FaRobot,
    FaLink 
} from "react-icons/fa";
import { 
    SiFlask, 
    SiGooglecloud, 
    SiMicrosoftazure, 
    SiSwift, 
    SiMysql, 
    SiTensorflow, 
    SiPytorch,
    SiKubernetes,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiTypescript,
    SiOpenai
} from "react-icons/si";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { icon: FaPython, name: "Python", hoverColor: "group-hover:text-blue-light" },
                { icon: FaJs, name: "JavaScript", hoverColor: "group-hover:text-accent" },
                { icon: SiSwift, name: "Swift", hoverColor: "group-hover:text-palantir-blue" },
            ]
        },
        {
            title: "AI & Machine Learning",
            skills: [
                { icon: SiTensorflow, name: "TensorFlow", hoverColor: "group-hover:text-blue-light" },
                { icon: SiPytorch, name: "PyTorch", hoverColor: "group-hover:text-accent" },
                { icon: FaPython, name: "Scikit-learn", hoverColor: "group-hover:text-palantir-blue" },
                { icon: FaLink, name: "LangChain", hoverColor: "group-hover:text-blue-light" },
                { icon: FaRobot, name: "LangGraph", hoverColor: "group-hover:text-accent" },
                { icon: FaAws, name: "AWS Bedrock", hoverColor: "group-hover:text-palantir-blue" },
                { icon: SiOpenai, name: "OpenAI", hoverColor: "group-hover:text-blue-light" },
            ]
        },
        {
            title: "Frontend & Mobile",
            skills: [
                { icon: FaReact, name: "React", hoverColor: "group-hover:text-accent" }
            ]
        },
        {
            title: "Cloud & DevOps",
            skills: [
                { icon: FaAws, name: "AWS", hoverColor: "group-hover:text-palantir-blue" },
                { icon: SiGooglecloud, name: "Google Cloud", hoverColor: "group-hover:text-blue-light" },
                { icon: SiMicrosoftazure, name: "Azure", hoverColor: "group-hover:text-accent" },
                { icon: FaDocker, name: "Docker", hoverColor: "group-hover:text-palantir-blue" },
                { icon: SiKubernetes, name: "Kubernetes", hoverColor: "group-hover:text-blue-light" },
            ]
        },
        {
            title: "Databases & Tools",
            skills: [
                { icon: SiPostgresql, name: "PostgreSQL", hoverColor: "group-hover:text-accent" },
                { icon: FaGitAlt, name: "Git", hoverColor: "group-hover:text-palantir-blue" },
                { icon: FaLinux, name: "Linux", hoverColor: "group-hover:text-blue-light" },
            ]
        }
    ];

    return (
        <section id="skills" className="bg-gradient-to-b from-palantir-dark to-darkSlate py-16 sm:py-20 lg:py-24 xl:py-32">
            <motion.div
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-light to-palantir-blue mx-auto mb-6 animate-subtle-pulse"></div>
                        <p className="text-sm sm:text-base text-palantir-light max-w-2xl mx-auto leading-relaxed px-2">
                            A comprehensive overview of my technical expertise across various domains of software development.
                        </p>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Category Navigation */}
                        <div className="lg:w-1/3">
                            {/* Mobile: Horizontal scroll tabs */}
                            <div className="lg:hidden">
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {skillCategories.map((category, index) => (
                                        <button 
                                            key={index}
                                            className={`flex-shrink-0 px-3 py-2 rounded-lg border text-sm transition-all duration-300 ${
                                                activeCategory === index 
                                                    ? "bg-gradient-to-r from-palantir-blue to-palantir-navy border-blue-light text-white palantir-glow-sm" 
                                                    : "glass-effect-dark text-palantir-light hover:text-white hover:bg-palantir-blue/20"
                                            }`}
                                            onClick={() => setActiveCategory(index)}
                                        >
                                            {category.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop: Vertical tabs */}
                            <div className="hidden lg:block">
                                <ul className="space-y-2">
                                    {skillCategories.map((category, index) => (
                                        <li key={index}>
                                            <button 
                                                className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-500 ease-in-out transform ${
                                                    activeCategory === index 
                                                        ? "bg-gradient-to-r from-palantir-blue to-palantir-navy border-blue-light text-white scale-105 palantir-glow-md" 
                                                        : "glass-effect-dark text-palantir-light hover:text-white hover:bg-palantir-blue/20 hover:scale-102"
                                                }`}
                                                onClick={() => setActiveCategory(index)}
                                            >
                                                <div className="font-medium">{category.title}</div>
                                                <div className="text-sm opacity-75">{category.skills.length} technologies</div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {/* Skills Content */}
                        <div className="lg:w-2/3">
                            {skillCategories.map((category, categoryIndex) => (
                                <motion.div 
                                    key={categoryIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ 
                                        opacity: activeCategory === categoryIndex ? 1 : 0,
                                        x: activeCategory === categoryIndex ? 0 : 20
                                    }}
                                    transition={{ 
                                        duration: 0.4, 
                                        ease: "easeInOut",
                                        delay: activeCategory === categoryIndex ? 0.1 : 0
                                    }}
                                    className={`${
                                        activeCategory === categoryIndex ? "block" : "hidden"
                                    }`}
                                >
                                    <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-palantir-blue/10 transition-all duration-300">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 gradient-text-accent">{category.title}</h3>
                                        
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.div
                                                    key={skillIndex}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ 
                                                        opacity: activeCategory === categoryIndex ? 1 : 0,
                                                        scale: activeCategory === categoryIndex ? 1 : 0.9
                                                    }}
                                                    transition={{ 
                                                        duration: 0.3,
                                                        delay: activeCategory === categoryIndex ? 0.2 + (skillIndex * 0.1) : 0
                                                    }}
                                                    className="group"
                                                >
                                                    <div className="relative glass-effect-dark rounded-xl p-3 sm:p-4 transition-all duration-500 hover:transform hover:scale-105 group-hover:bg-palantir-blue/20 hover:palantir-glow-sm">
                                                        {/* Skill Icon */}
                                                        <div className="flex items-center justify-center mb-2 sm:mb-3">
                                                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-palantir-blue to-palantir-navy rounded-xl flex items-center justify-center group-hover:animate-subtle-pulse transition-colors duration-300">
                                                                <skill.icon className={`text-sm sm:text-lg lg:text-2xl text-white ${skill.hoverColor} group-hover:scale-110 transition-all duration-300`} />
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Skill Name */}
                                                        <h4 className="text-xs sm:text-sm font-medium text-white text-center group-hover:text-blue-light transition-colors duration-300">
                                                            {skill.name}
                                                        </h4>
                                                    </div>
                                                </motion.div>
                                            ))}
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

export default Skills; 