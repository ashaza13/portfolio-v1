import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";


const card = ({ name, description, technologies, link, externalURL }) => {
    return (
        <div className="wrap w-full mx-auto py-3">
            <div className="max-w-sm relative aspect-square bg-symbiota rounded-md drop-shadow-xl">

                <div className="rounded-md inline-block bg-slate h-full bg-opacity-95 py-4 px-4">
                    <p className="text-orange-600 text-l">Featured Project</p>
                    <h1 className="text-xl mb-5"><a href={link} className="text-white font-bold transition duration-500 hover:text-orange-600">{name}</a></h1>
                    <p className="text-white rounded-md py-2 drop-shadow-lg">{description}</p>
                    <ul className="flex flex-wrap text-lightGray my-4">
                        {technologies.map((technology, i) => (
                            <li key={i} className="pr-4">
                                {technology}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center text-white md:justify-end">
                        <li className="transition duration-500 pr-8 hover:text-orange-600"><a href={link} target="_blank" rel="norefferer"><FiGithub className="text-xl float-left" /></a></li>
                        <li className="transition duration-500 hover:text-orange-600"><a href={externalURL} target="_blank" rel="norefferer"><FiExternalLink className="text-xl float-left" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default card;