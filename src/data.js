import {
    FaPython,
    FaJs,
    FaReact,
    FaAws,
    FaLinux,
    FaDocker,
    FaGitAlt,
    FaRobot,
    FaLink,
    FaDatabase,
    FaServer,
    FaStream,
    FaTerminal,
} from "react-icons/fa";
import {
    SiGooglecloud,
    SiMicrosoftazure,
    SiSwift,
    SiTensorflow,
    SiPytorch,
    SiKubernetes,
    SiPostgresql,
    SiOpenai,
    SiScikitlearn,
    SiGo,
    SiApache,
    SiTwilio,
    SiSocketdotio,
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiCamera, FiMail } from "react-icons/fi";

import symbiotamap from "./static/images/symbiotamap.png";
import splices from "./static/images/splices.png";
import chase from "./static/images/chase.png";
import firebase from "./static/images/firebase.png";

export const EMAIL = "ahmed.ashaz9@gmail.com";

export const socials = [
    { name: "GitHub", href: "https://github.com/ashaza13", icon: FiGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ashaz-ahmed/", icon: FiLinkedin },
    { name: "Photography", href: "https://ahmedashaz9b9f3.myportfolio.com/", icon: FiCamera },
    { name: "Email", href: `mailto:${EMAIL}`, icon: FiMail },
];

export const navigation = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Contact", id: "contact" },
];

export const experiences = [
    {
        company: "Takt",
        position: "Backend Engineer",
        duration: "2025 — Present",
        location: "Reston, VA",
        responsibilities: [
            "Built all of Takt's real-time data streaming pipelines in Python with Apache Beam on Google Cloud Dataflow. Ten pipelines each process around 100 million rows a day, significantly improving system performance and giving customers real-time, data-driven insights.",
            "Architected and built the notification system end to end in Go, delivering real-time alerts over WebSockets and SMS through Twilio.",
            "Architected and built the gamification system in Go and Dataflow, turning live performance data into engagement features.",
            "Architected and built the Learning Curve system in Go, giving managers insight into how quickly new employees ramp up.",
            "Work daily with AI-assisted tools like Claude, Cursor, and Codex to help build a modern platform that benefits from AI without relying on it.",
        ],
        tags: ["Go", "Python", "Apache Beam", "Dataflow", "BigQuery", "Spanner", "WebSockets", "Twilio"],
    },
    {
        company: "Accenture Federal Services",
        position: "Data & AI Solutions Architect",
        duration: "2024 — 2025",
        location: "Arlington, VA",
        responsibilities: [
            "Developed a serverless data analytics platform in AWS SageMaker Studio, used by 100+ users, improving accessibility and reducing Python package installation time from 2 months to 2 weeks.",
            "Built an ML data anomaly detection system using a tabular autoencoder model, increasing anomaly detection accuracy by 90% and replacing a manual process with proactive alerts for stakeholders, developed with PyTorch, AWS SageMaker, and Oracle Database technology.",
            "Designed and deployed an LLM-powered support agent using AWS Lambda, OpenSearch, and GPT-4o, reducing FAFSA issue resolution time by 90% and handling 1.4 million support calls while reducing human agent workload.",
            "Deployed a customer-facing LLM chatbot using AWS Lambda, EventBridge, Kendra, and LangChain, assisting 14 million users in understanding financial aid loan statuses and troubleshooting FAFSA form issues.",
        ],
        tags: ["AWS SageMaker", "PyTorch", "LangChain", "GPT-4o", "OpenSearch"],
    },
    {
        company: "GDIT",
        position: "Software Developer Associate",
        duration: "2022 — 2023",
        location: "Falls Church, VA (remote)",
        responsibilities: [
            "Worked on the ISEE contract with the Defense Intelligence Agency (DIA) concerning the automation of admin account creation along with identity, credential, and access management (ICAM) for all other users.",
            "Collaborated with and led a team of 3 software developer interns to write and document PowerShell scripts automating the migration of thousands of overseas Department of Defense employees' MS Exchange email accounts to improve overall security.",
            "Engaged with stakeholders throughout the company to deliver regular progress updates, manage expectations, and build transparency across the organization.",
        ],
        tags: ["PowerShell", "ICAM", "MS Exchange"],
    },
    {
        company: "HEVT",
        position: "Undergraduate Researcher",
        duration: "2022 — 2024",
        location: "Blacksburg, VA",
        responsibilities: [
            "Conducted research for the Cadillac Lyriq EcoCAR 4-year design competition sponsored by General Motors.",
            "Designed and researched different connected and automated vehicle systems (CAVs) to improve overall fuel efficiency.",
            "Developed autonomous vehicle driving scenarios using tools such as MATLAB, Simulink, and TensorFlow.",
        ],
        tags: ["MATLAB", "Simulink", "TensorFlow"],
    },
];

export const projects = [
    {
        name: "Acadia",
        description:
            "An iOS app that uses NFC to automate college classroom attendance, replacing manual roll calls. Deployed at Virginia Tech, where 140+ students and faculty use it to log attendance securely and cut administrative work for instructors.",
        technologies: ["Swift", "Google Cloud", "NFC", "iOS"],
        link: "",
        image: "https://ik.imagekit.io/qysd8alv5/acadia.png?updatedAt=1749160217465",
        externalURL: "https://www.acadiapresence.com/",
        isAppStore: true,
        duration: "2024 — Present",
        featured: true,
    },
    {
        name: "Symbiota",
        description:
            "A web app that teaches people how to recycle effectively. Search for common items and find out whether your local recycling center accepts them.",
        technologies: ["AWS Amplify", "Lambda", "React", "Node.js"],
        link: "https://github.com/ashaza13/symbiota-client",
        image: symbiotamap,
        externalURL: "https://main.d2sgk48knqno1u.amplifyapp.com/",
        duration: "2023",
    },
    {
        name: "Spices and Slices",
        description:
            "A custom invoice form built for a mango business to track inventory and gauge customer interest.",
        technologies: ["AWS Amplify", "React", "Google Sheets", "Node.js"],
        link: "",
        image: splices,
        externalURL: "https://www.spicesandslices.com/",
        duration: "2023",
    },
    {
        name: "Traffic Light Scenario",
        description:
            "Simulates an autonomous vehicle on a long curved road with three traffic lights. The vehicle detects each light's color change and reacts accordingly.",
        technologies: ["MATLAB", "TensorFlow", "Sensor Fusion"],
        link: "https://github.com/ashaza13/MATLAB-Traffic-Light-Simulation",
        image: chase,
        externalURL: "",
        duration: "2023",
    },
    {
        name: "Healthy",
        description:
            "A full-stack iOS app for counting calories and finding recipes to support a healthier lifestyle.",
        technologies: ["Swift", "HealthKit", "UIKit", "Firebase"],
        link: "",
        image: firebase,
        externalURL: "",
        duration: "2022",
    },
];

export const skillCategories = [
    {
        title: "Backend & Data Streaming",
        description: "Real-time pipelines and services at scale.",
        skills: [
            { icon: SiGo, name: "Go" },
            { icon: FaPython, name: "Python" },
            { icon: SiApache, name: "Apache Beam" },
            { icon: FaStream, name: "Dataflow" },
            { icon: FaDatabase, name: "BigQuery" },
            { icon: FaServer, name: "Spanner" },
            { icon: SiSocketdotio, name: "WebSockets" },
            { icon: SiTwilio, name: "Twilio" },
        ],
        wide: true,
    },
    {
        title: "AI-Assisted Development",
        description: "Tools that speed up how I build.",
        skills: [
            { icon: FaTerminal, name: "Claude" },
            { icon: FaTerminal, name: "Cursor" },
            { icon: SiOpenai, name: "Codex" },
        ],
    },
    {
        title: "AI & Machine Learning",
        description: "Agents, retrieval, and models in production.",
        skills: [
            { icon: SiOpenai, name: "OpenAI" },
            { icon: FaLink, name: "LangChain" },
            { icon: FaRobot, name: "LangGraph" },
            { icon: FaAws, name: "AWS Bedrock" },
            { icon: SiPytorch, name: "PyTorch" },
            { icon: SiTensorflow, name: "TensorFlow" },
            { icon: SiScikitlearn, name: "Scikit-learn" },
        ],
        wide: true,
    },
    {
        title: "Languages",
        description: "Day-to-day tools of the trade.",
        skills: [
            { icon: SiGo, name: "Go" },
            { icon: FaPython, name: "Python" },
            { icon: FaJs, name: "JavaScript" },
            { icon: SiSwift, name: "Swift" },
        ],
    },
    {
        title: "Cloud & DevOps",
        description: "Serverless and containerized infrastructure.",
        skills: [
            { icon: SiGooglecloud, name: "Google Cloud" },
            { icon: FaAws, name: "AWS" },
            { icon: SiMicrosoftazure, name: "Azure" },
            { icon: FaDocker, name: "Docker" },
            { icon: SiKubernetes, name: "Kubernetes" },
        ],
    },
    {
        title: "Frontend",
        description: "Interfaces for web and mobile.",
        skills: [
            { icon: FaReact, name: "React" },
            { icon: SiSwift, name: "UIKit" },
        ],
    },
    {
        title: "Data & Tools",
        description: "Storage, versioning, environments.",
        skills: [
            { icon: SiPostgresql, name: "PostgreSQL" },
            { icon: FaGitAlt, name: "Git" },
            { icon: FaLinux, name: "Linux" },
        ],
    },
];
