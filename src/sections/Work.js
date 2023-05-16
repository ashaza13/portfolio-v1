import React from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Card from "../components/Card";

const projects = [
    { name: "Symbiota", description: "A web application designed to educated individuals on effective recycling methods. Search for common items and determine if it can be recycled at your local recycling center.", technologies: ["AWS Amplify", "ReactJS", "GraphQL", "NodeJS"], link: "https://github.com/ashaza13/symbiota-client" },
    { name: "Traffic Light Scenario", description: "A scenario to simulate an autonomous vehicle on a long curved road with 3 different traffic lights. The autonomous vehicle is able to detect the change in color of the traffic light and react accordingly. This scenario is designed with MATLAB's Driving Scenario Designer tool.", technologies: ["MATLAB", "TensorFlow", "Sensor Fusion"], link: "" },
    { name: "Healthy", description: "A full-stack iOS application that allows users to count calories and find recipes to live an overall healthier lifestyle.", technologies: ["Swift", "Apple Health Kit", "UIKit", "Google Firebase"], link: "" },
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
                                        link={project.link} />
                                ) : (
                                    <CardRight
                                        key={i}
                                        name={project.name}
                                        description={project.description}
                                        technologies={project.technologies}
                                        link={project.link} />
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
                                    link={project.link} />
                            ))}
                        </div>
                    </div>
            </div>
        </section >
    );
};

export default Work;