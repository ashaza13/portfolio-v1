import React from "react";
import ProjectCard from "../components/ProjectCard.js";

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="pb-8">
                <h1 className="text-white font-bold text-2xl">Other Noteworthy Projects</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {new Array(6).fill(0).map((_, i) => (
                    <ProjectCard
                        key={i}
                        name="Project Name"
                        description="A description of the project"
                        technologies={["Technology 1", "Technology 2", "Technology 3"]}
                        link=""
                        externalURL=""
                        imageUrl="https://ik.imagekit.io/qysd8alv5/symbiotamap.png?updatedAt=1692733900341"
                    />
                ))
                }
            </div>
        </div>
    );
}

export default Projects;

