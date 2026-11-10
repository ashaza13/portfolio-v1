import symbiotamap from "./static/images/symbiotamap.png";
import splices from "./static/images/splices.png";
import chase from "./static/images/chase.png";
import firebase from "./static/images/firebase.png";

export const EMAIL = "ahmed.ashaz9@gmail.com";

export const socials = [
    { name: "GitHub", href: "https://github.com/ashaza13" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ashaz-ahmed/" },
    { name: "Photography", href: "https://ahmedashaz9b9f3.myportfolio.com/" },
];

export const navigation = [
    { name: "Systems", id: "systems" },
    { name: "Record", id: "record" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
];

// Pipeline throughput used by the hero estimate: ten pipelines at ~100M rows/day each.
export const PIPELINES = 10;
export const ROWS_PER_PIPELINE_PER_DAY = 100_000_000;

// Examples of the kinds of insight the systems below produce (illustrative, not live data).
export const insights = [
    { title: "Alert sent", detail: "a threshold tripped, pushed over WebSockets + SMS" },
    { title: "Leaderboard moved", detail: "live performance, re-ranked" },
    { title: "Ramp-up curve updated", detail: "how fast a new hire is getting there" },
    { title: "Metrics refreshed", detail: "a customer dashboard, seconds behind reality" },
];

export const systems = [
    {
        name: "Streaming pipelines ×10",
        language: "Python, Apache Beam",
        runsOn: "Dataflow, BigQuery, Spanner",
        insight: "Live operational metrics for every customer (~100M rows / day, each)",
    },
    {
        name: "Notifications",
        language: "Go",
        runsOn: "WebSockets, Twilio",
        insight: "The moment something needs attention, as push or SMS",
    },
    {
        name: "Gamification",
        language: "Go, Beam",
        runsOn: "Dataflow",
        insight: "Where you stand right now, from live performance",
    },
    {
        name: "Learning Curve",
        language: "Go",
        runsOn: "Google Cloud",
        insight: "How quickly each new hire is ramping up",
    },
];

// Newest first. `to: null` marks the current role.
export const record = [
    {
        from: "2025",
        to: null,
        org: "Takt",
        role: "Backend Engineer",
        where: "Reston, VA",
        note: "All real-time pipelines, plus notifications, gamification and Learning Curve.",
    },
    {
        from: "2024",
        to: "2025",
        org: "Accenture Federal",
        role: "Data & AI Solutions Architect",
        where: "Arlington, VA",
        note: "LLM support agent: 1.4M calls. Chatbot for 14M FAFSA users.",
    },
    {
        from: "2022",
        to: "2024",
        org: "HEVT",
        role: "Undergraduate Researcher",
        where: "Blacksburg, VA",
        note: "GM EcoCAR: connected and automated vehicle research.",
    },
    {
        from: "2022",
        to: "2023",
        org: "GDIT",
        role: "Software Developer Associate",
        where: "Falls Church, VA",
        note: "ICAM automation for the DIA; led 3 interns.",
    },
];

export const stack = [
    { label: "Daily", value: "Go, Python, Apache Beam, Dataflow, BigQuery, Spanner" },
    { label: "Realtime", value: "WebSockets, Twilio" },
    { label: "AI / ML", value: "OpenAI, LangChain, LangGraph, AWS Bedrock, PyTorch, TensorFlow, scikit-learn" },
    { label: "Cloud", value: "Google Cloud, AWS, Azure, Docker, Kubernetes" },
    { label: "Also", value: "JavaScript, React, Swift, UIKit, PostgreSQL, Linux, Git" },
    { label: "With", value: "Claude, Cursor, Codex" },
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
