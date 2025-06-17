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
            color: "from-primary to-secondary",
            skills: [
                { icon: FaPython, name: "Python", color: "from-blue-light to-blue-dark" },
                { icon: FaJs, name: "JavaScript", color: "from-accent to-secondary" },
                { icon: SiSwift, name: "Swift", color: "from-primary to-accent" },
            ]
        },
        {
            title: "AI & Machine Learning",
            color: "from-green-light to-green-dark",
            skills: [
                { icon: SiTensorflow, name: "TensorFlow", color: "from-primary to-secondary" },
                { icon: SiPytorch, name: "PyTorch", color: "from-accent to-primary" },
                { icon: FaPython, name: "Scikit-learn", color: "from-blue-light to-blue-dark" },
                { icon: FaLink, name: "LangChain", color: "from-green-light to-green-dark" },
                { icon: FaRobot, name: "LangGraph", color: "from-primary to-blue-light" },
                { icon: FaAws, name: "AWS Bedrock", color: "from-secondary to-accent" },
                { icon: SiOpenai, name: "OpenAI", color: "from-green-light to-blue-light" },
            ]
        },
        {
            title: "Frontend & Mobile",
            color: "from-blue-light to-blue-dark",
            skills: [
                { icon: FaReact, name: "React", color: "from-blue-light to-blue-dark" }
            ]
        },
        {
            title: "Cloud & DevOps",
            color: "from-secondary to-accent",
            skills: [
                { icon: FaAws, name: "AWS", color: "from-secondary to-accent" },
                { icon: SiGooglecloud, name: "Google Cloud", color: "from-blue-light to-blue-dark" },
                { icon: SiMicrosoftazure, name: "Azure", color: "from-blue-dark to-primary" },
                { icon: FaDocker, name: "Docker", color: "from-blue-light to-green-light" },
                { icon: SiKubernetes, name: "Kubernetes", color: "from-blue-dark to-green-dark" },
            ]
        },
        {
            title: "Databases & Tools",
            color: "from-primary to-blue-light",
            skills: [
                { icon: SiPostgresql, name: "PostgreSQL", color: "from-blue-dark to-blue-light" },
                { icon: FaGitAlt, name: "Git", color: "from-secondary to-primary" },
                { icon: FaLinux, name: "Linux", color: "from-accent to-secondary" },
            ]
        }
    ];

    return (
        <section id="skills" className="bg-gradient-to-br from-lightBlue to-warm-gray py-16 sm:py-20 lg:py-24 xl:py-32">
            <motion.div
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate mb-4">Skills & Technologies</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
                        <p className="text-sm sm:text-base text-darkSlate max-w-2xl mx-auto leading-relaxed px-2">
                            A comprehensive overview of my technical expertise across various domains of software development.
                        </p>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Category Navigation */}
                        <div className="lg:w-1/3">
                            {/* Mobile: Horizontal scroll tabs */}
                            <div className="lg:hidden">
                                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                    {skillCategories.map((category, index) => (
                                        <button 
                                            key={index}
                                            className={`flex-shrink-0 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-300 ${
                                                activeCategory === index 
                                                    ? "bg-white text-slate border-white shadow-lg" 
                                                    : "bg-white/70 border-white/50 text-darkSlate hover:bg-white hover:shadow-lg"
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
                                <ul className="space-y-3">
                                    {skillCategories.map((category, index) => (
                                        <li key={index}>
                                            <button 
                                                className={`w-full text-left px-6 py-4 rounded-2xl border transition-all duration-500 ease-in-out transform ${
                                                    activeCategory === index 
                                                        ? "bg-white border-white text-slate scale-105 shadow-xl" 
                                                        : "bg-white/70 border-white/50 text-darkSlate hover:bg-white hover:scale-102 hover:shadow-lg"
                                                }`}
                                                onClick={() => setActiveCategory(index)}
                                            >
                                                <div className="font-semibold text-base">{category.title}</div>
                                                <div className="text-sm opacity-75 mt-1">{category.skills.length} technologies</div>
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
                                    <div className="headspace-card p-6 sm:p-8 lg:p-10">
                                        <div className="flex items-center mb-6 sm:mb-8">
                                            <div className={`w-3 h-8 bg-gradient-to-b ${category.color} rounded-full mr-4`}></div>
                                            <h3 className="text-xl sm:text-2xl font-semibold text-slate">{category.title}</h3>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                                                    <div className="relative bg-white rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:transform hover:scale-110 hover:shadow-xl border border-white/50">
                                                        {/* Skill Icon */}
                                                        <div className="flex items-center justify-center mb-3 sm:mb-4">
                                                            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                                                <skill.icon className="text-lg sm:text-xl lg:text-2xl text-white transition-all duration-300" />
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Skill Name */}
                                                        <h4 className="text-xs sm:text-sm font-semibold text-slate text-center transition-colors duration-300">
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