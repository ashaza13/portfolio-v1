import React from "react";
import { FiGithub } from "react-icons/fi";


const card = ({ name, description, technologies, link }) => {
    return (
        <div className="wrap w-full mx-auto py-3">
            <div>
                    <div className="relative aspect-square bg-symbiota rounded-md drop-shadow-xl">

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
                            <div className="text-white">
                                <a href={link} className="transition duration-500 hover:text-orange-600"><FiGithub className="text-xl md:float-right" /></a>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default card;