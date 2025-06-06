import React from "react";
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
    FaGitAlt 
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
    SiTypescript
} from "react-icons/si";

const Skills = () => {
    // Function to convert percentage to skill level
    const getSkillLevel = (level) => {
        if (level <= 40) return "Beginner";
        if (level <= 75) return "Intermediate";
        return "Advanced";
    };

    // Function to get skill level color
    const getSkillLevelColor = (level) => {
        if (level <= 40) return "text-orange-400";
        if (level <= 75) return "text-blue-400";
        return "text-green-400";
    };

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { icon: FaPython, name: "Python", level: 95, color: "from-blue-400 to-blue-600" },
                { icon: FaJs, name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
                { icon: SiSwift, name: "Swift", level: 75, color: "from-orange-400 to-orange-600" },
            ]
        },
        {
            title: "Frontend & Mobile",
            skills: [
                { icon: FaReact, name: "React", level: 90, color: "from-cyan-400 to-cyan-600" }
            ]
        },
        {
            title: "AI & Machine Learning",
            skills: [
                { icon: SiTensorflow, name: "TensorFlow", level: 30, color: "from-orange-500 to-orange-700" },
                { icon: SiPytorch, name: "PyTorch", level: 80, color: "from-red-500 to-red-700" },
                { icon: FaPython, name: "Scikit-learn", level: 85, color: "from-blue-400 to-blue-600" },
            ]
        },
        {
            title: "Cloud & DevOps",
            skills: [
                { icon: FaAws, name: "AWS", level: 90, color: "from-orange-400 to-orange-600" },
                { icon: SiGooglecloud, name: "Google Cloud", level: 50, color: "from-blue-500 to-blue-700" },
                { icon: SiMicrosoftazure, name: "Azure", level: 50, color: "from-blue-600 to-blue-800" },
                { icon: FaDocker, name: "Docker", level: 80, color: "from-blue-500 to-blue-700" },
                { icon: SiKubernetes, name: "Kubernetes", level: 30, color: "from-blue-600 to-purple-600" },
            ]
        },
        {
            title: "Databases & Tools",
            skills: [
                { icon: SiPostgresql, name: "PostgreSQL", level: 40, color: "from-blue-600 to-blue-800" },
                { icon: FaGitAlt, name: "Git", level: 90, color: "from-orange-500 to-red-600" },
                { icon: FaLinux, name: "Linux", level: 85, color: "from-yellow-500 to-yellow-700" },
            ]
        }
    ];

    return (
        <section id="skills" className="bg-black py-20 lg:py-32">
            <motion.div
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="mx-4 max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
                        <div className="w-24 h-0.5 bg-gray-600 mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            A comprehensive overview of my technical expertise across various domains of software development.
                        </p>
                    </div>
                    
                    {/* Skills Categories */}
                    <div className="space-y-12">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div 
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            >
                                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                                    {category.title}
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05 
                                            }}
                                            className="group"
                                        >
                                            <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 p-6 transition-all duration-500 hover:transform hover:scale-105">
                                                {/* Skill Icon */}
                                                <div className="flex items-center justify-center mb-4">
                                                    <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                                                        <skill.icon className="text-3xl text-white group-hover:scale-110 transition-transform duration-300" />
                                                    </div>
                                                </div>
                                                
                                                {/* Skill Name */}
                                                <h4 className="text-lg font-medium text-white text-center mb-4 group-hover:text-gray-200 transition-colors duration-300">
                                                    {skill.name}
                                                </h4>
                                                
                                                {/* Skill Level Display */}
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-400">Proficiency</span>
                                                        <span className={`font-medium ${getSkillLevelColor(skill.level)}`}>
                                                            {getSkillLevel(skill.level)}
                                                        </span>
                                                    </div>
                                                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                                        <motion.div 
                                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            viewport={{ once: true, amount: 0.3 }}
                                                            transition={{ 
                                                                duration: 1, 
                                                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                                                ease: "easeOut"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default Skills; 