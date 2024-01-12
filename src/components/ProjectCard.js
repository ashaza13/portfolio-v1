import React from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

{/* <ul className="flex items-center text-white md:justify-end">
<li className="transition duration-500 pr-8 hover:text-orange-600"><a href={link} target="_blank" rel="norefferer"><FiGithub className="text-xl float-left" /></a></li>
<li className="transition duration-500 hover:text-orange-600"><a href={externalURL} target="_blank" rel="norefferer"><FiExternalLink className="text-xl float-left" /></a></li>
</ul> */}

const ProjectCard = ({ name, description, technologies, link, externalURL, imageUrl }) => {
    return (
        <div className="w-72 h-72 relative aspect-square rounded-md drop-shadow-xl">
            <div className="flex flex-col rounded-md inline-block bg-slate h-full bg-opacity-95 py-4 px-4">
                <div className="flex items-center justify-between">
                    <FiFolder className="text-3xl text-orange-600" />
                    <div className="flex items-center space-x-2">
                        <a href={link} target="_blank" rel="norefferer"><FiGithub className="text-white text-xl transition duration-500 hover:text-orange-600" /></a>
                        <a href={link} target="_blank" rel="norefferer"><FiExternalLink className="text-white text-xl transition duration-500 hover:text-orange-600" /></a>
                    </div>
                </div>
                <h1 className="text-xl"><a href={link} className="text-white font-bold transition duration-500 hover:text-orange-600">{name}</a></h1>
                <div className="flex flex-col justify-between">
                    <p className="text-white rounded-md drop-shadow-lg">{description}</p>
                    <ul className="flex flex-wrap text-lightGray my-4">
                        {technologies.map((technology, i) => (
                            <li key={i} className="text-xs pr-4">
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;