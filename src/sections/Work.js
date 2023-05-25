import React from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Card from "../components/Card";

const projects = [
    { name: "Symbiota", description: "A web application designed to educate individuals on effective recycling methods. Search for common items and determine if it can be recycled at your local recycling center.", technologies: ["AWS Amplify/Lambda", "ReactJS", "REST API", "NodeJS"], link: "https://github.com/ashaza13/symbiota-client", imageUrl: "../static/images/symbiota.png", externalURL: "https://main.d2sgk48knqno1u.amplifyapp.com/" },
    { name: "Traffic Light Scenario", description: "A scenario to simulate an autonomous vehicle on a long curved road with 3 different traffic lights. The autonomous vehicle is able to detect the change in color of the traffic light and react accordingly.", technologies: ["MATLAB", "TensorFlow", "Sensor Fusion"], link: "https://github.com/ashaza13/MATLAB-Traffic-Light-Simulation", imageUrl: "../static/images/chase.png", externalURL:"" },
    { name: "Healthy", description: "A full-stack iOS application that allows users to count calories and find recipes to live an overall healthier lifestyle.", technologies: ["Swift", "Apple Health Kit", "UIKit", "Google Firebase"], link: "", imageUrl: "../static/images/firebase.png", externalURL:"" },
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
                                    imageUrl={project.imageUrl}
                                    externalURL={project.externalURL} />
                            ) : (
                                <CardRight
                                    key={i}
                                    name={project.name}
                                    description={project.description}
                                    technologies={project.technologies}
                                    link={project.link}
                                    imageUrl={project.imageUrl} />
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
                                externalURL={project.externalURL} />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Work;