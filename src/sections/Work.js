import React from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Card from "../components/Card";

const projects = [
    { 
        name: "Acadia", 
        description: "An iOS application that revolutionizes classroom attendance tracking using Swift, Google Cloud Platform, and NFC technology. Deployed at Virginia Tech where it's actively used by 140+ students and faculty to streamline attendance management, replacing manual roll calls with secure and efficient attendance logging.", 
        technologies: ["Swift", "Google Cloud Platform", "NFC Technology", "iOS Development"], 
        link: "", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/acadia.png?updatedAt=1749160217465", 
        externalURL: "https://www.acadiapresence.com/",
        isAppStore: true
    },
    { 
        name: "Symbiota", 
        description: "A web application designed to educate individuals on effective recycling methods. Search for common items and determine if it can be recycled at your local recycling center.", 
        technologies: ["AWS Amplify/Lambda", "ReactJS", "REST API", "NodeJS"], 
        link: "https://github.com/ashaza13/symbiota-client", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/symbiotamap.png?updatedAt=1692733900341", 
        externalURL: "https://main.d2sgk48knqno1u.amplifyapp.com/" 
    },
    { 
        name: "Spices and Slices", 
        description: "A custom invoice form created to help a mango business. The form is meant to keep track of inventory and gauge interest.", 
        technologies: ["AWS Amplify/Lambda", "ReactJS", "Google Sheets", "NodeJS"], 
        link: "", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/splices.png?updatedAt=1692733900261", 
        externalURL: "https://www.spicesandslices.com/" 
    },
    { 
        name: "Traffic Light Scenario", 
        description: "A scenario to simulate an autonomous vehicle on a long curved road with 3 different traffic lights. The autonomous vehicle is able to detect the change in color of the traffic light and react accordingly.", 
        technologies: ["MATLAB", "TensorFlow", "Sensor Fusion"], 
        link: "https://github.com/ashaza13/MATLAB-Traffic-Light-Simulation", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/chase.png?updatedAt=1692733900167", 
        externalURL:"" },
    { 
        name: "Healthy", 
        description: "A full-stack iOS application that allows users to count calories and find recipes to live an overall healthier lifestyle.", 
        technologies: ["Swift", "Apple Health Kit", "UIKit", "Google Firebase"], 
        link: "", 
        imageUrl: "https://ik.imagekit.io/qysd8alv5/firebase.png?updatedAt=1692733900123", 
        externalURL:"" 
    },
];

const Work = () => {
    return (
        <section id="work">
            <div className="flex justify-center py-12 mx-4 lg:py-28">
                <div className="max-w-5xl my-10 text-left">
                    <div className="relative flex items-center pb-5">
                        <p className="text-orange-600 font-bold text-2xl mr-2">03. </p>
                        <h1 className="mr-4 text-white font-bold text-2xl"> Projects</h1>
                        <div className="max-w-sm flex-grow border-t-2 border-slate"></div>
                    </div>
                    <div className="hidden md:block">
                        {projects.map((project, i) => (
                            i % 2 === 0 ? (
                                <CardLeft
                                    key={i}
                                    name={project.name}
                                    description={project.description}
                                    technologies={project.technologies}
                                    link={project.link}
                                    image={project.imageUrl}
                                    externalURL={project.externalURL}
                                    isAppStore={project.isAppStore} />
                            ) : (
                                <CardRight
                                    key={i}
                                    name={project.name}
                                    description={project.description}
                                    technologies={project.technologies}
                                    link={project.link}
                                    image={project.imageUrl} 
                                    externalURL={project.externalURL}
                                    isAppStore={project.isAppStore} />
                            )

                        ))}
                    </div>
                    <div className="visible md:hidden">
                        {projects.map((project, i) => (
                            <Card
                                key={i}
                                name={project.name}
                                description={project.description}
                                technologies={project.technologies}
                                link={project.link}
                                externalURL={project.externalURL}
                                isAppStore={project.isAppStore} />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Work;