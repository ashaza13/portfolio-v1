import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaApple } from "react-icons/fa";


const cardRight = ({ name, description, technologies, link, image, externalURL, isAppStore }) => {
    return (
        <div className="wrap w-full mx-auto mb-12 md:my-28">
            <div className="md:grid md:grid-cols-12 md:gap-4">
                <div className="row-span-full col-start-5 col-span-10 self-center rounded-md transition duration-500 opacity-50 hover:opacity-100 z-0">
                    <a href={externalURL || link} target="_blank"><img className="aspect-square md:aspect-auto object-cover rounded-md drop-shadow-lg" src={image} alt="" /></a>
                </div>
                <div className="row-span-full col-start-1 col-span-6 self-center p-1 text-left z-10">
                    <div className="flex items-center mb-2">
                        <p className="text-orange-600 text-l">Featured Project</p>
                        {isAppStore && (
                            <span className="ml-3 bg-orange-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                <FaApple className="mr-1" />
                                App Store
                            </span>
                        )}
                    </div>
                    <h1 className="text-xl my-1"><a href="#" className="text-white font-bold transition duration-500 hover:text-orange-600">{name}</a></h1>
                    <p className="text-white bg-slate rounded-md py-2 px-2 text-left drop-shadow-lg">{description}</p>
                    <ul className="flex flex-wrap items-center text-lightGray my-4 justify-start">
                        {technologies.map((technology, i) => (
                            <li key={i} className="md:pr-4">
                                {technology}
                            </li>
                        ))}
                    </ul>
                    <div className="text-white">
                        <ul className="flex items-center text-white md:justify-start">
                            {link && (
                                <li><a href={link} className={`transition duration-500 hover:text-orange-600 ${externalURL.length > 0 ? 'pr-8' : 'pr-0'}`}><FiGithub className="text-xl float-left" /></a></li>
                            )}
                            {externalURL.length > 0 && 
                                <li><a href={externalURL} className="transition duration-500 hover:text-orange-600" target="_blank" rel="norefferer"><FiExternalLink className="text-xl float-left" /></a></li> 
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default cardRight;