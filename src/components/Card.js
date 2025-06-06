import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaApple } from "react-icons/fa";


const card = ({ name, description, technologies, link, externalURL, isAppStore }) => {
    return (
        <div className="wrap w-full mx-auto py-3">
            <div className="max-w-sm relative aspect-square bg-symbiota rounded-md drop-shadow-xl">

                <div className="rounded-md inline-block bg-slate h-full bg-opacity-95 py-4 px-4">
                    <div className="flex items-center mb-2">
                        <p className="text-orange-600 text-l">Featured Project</p>
                        {isAppStore && (
                            <span className="ml-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                <FaApple className="mr-1" />
                                App Store
                            </span>
                        )}
                    </div>
                    <h1 className="text-xl mb-5"><a href={externalURL || link} className="text-white font-bold transition duration-500 hover:text-orange-600">{name}</a></h1>
                    <p className="text-white rounded-md py-2 drop-shadow-lg">{description}</p>
                    <ul className="flex flex-wrap text-lightGray my-4">
                        {technologies.map((technology, i) => (
                            <li key={i} className="pr-4">
                                {technology}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center text-white md:justify-end">
                        {link && (
                            <li className="transition duration-500 pr-8 hover:text-orange-600">
                                <a href={link} target="_blank" rel="norefferer"><FiGithub className="text-xl float-left" /></a>
                            </li>
                        )}
                        {externalURL && (
                            <li className="transition duration-500 hover:text-orange-600">
                                <a href={externalURL} target="_blank" rel="norefferer"><FiExternalLink className="text-xl float-left" /></a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default card;