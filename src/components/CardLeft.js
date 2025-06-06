import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaApple } from "react-icons/fa";


const cardLeft = ({ name, description, technologies, link, image, externalURL, isAppStore }) => {
    return (
        <div className="wrap w-full mx-auto my-8 md:my-12">
            <div className="md:grid md:grid-cols-12 md:gap-4">
                <div className="md:row-span-full md:col-start-1 md:col-span-7 md:self-center md:rounded-md md:transition md:duration-500 opacity-50 md:hover:opacity-100 md:z-0 md:flex">
                    <a href={externalURL || link} target="_blank"><img className="aspect-square md:aspect-auto object-cover rounded-md drop-shadow-lg" src={image} alt="" /></a>
                </div>
                <div className="row-span-full col-span-6 col-end-13 self-center p-1 md:text-right z-10">
                    <div className="flex items-center md:justify-end mb-2">
                        <p className="text-orange-600 text-l">Featured Project</p>
                        {isAppStore && (
                            <span className="ml-3 bg-orange-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                <FaApple className="mr-1" />
                                App Store
                            </span>
                        )}
                    </div>
                    <h1 className="text-xl mb-5"><a href="#" className="text-white font-bold transition duration-500 hover:text-orange-600">{name}</a></h1>
                    <p className="text-white bg-slate rounded-md py-2 px-2 md:text-right drop-shadow-lg">{description}</p>
                    <ul className="flex flex-wrap text-lightGray my-4 md:justify-end">
                        {technologies.map((technology, i) => (
                            <li key={i} className="md:pl-4">
                                {technology}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center text-white md:justify-end">
                        {link && (
                            <li className={`transition duration-500 hover:text-orange-600 ${externalURL.length > 0 ? 'pr-8' : 'pr-0'}`}>
                                <a href={link} target="_blank" rel="norefferer"><FiGithub className="text-xl float-left" /></a>
                            </li>
                        )}
                        {externalURL.length > 0 &&
                            <li><a href={externalURL} className="transition duration-500 hover:text-orange-600" target="_blank" rel="norefferer"><FiExternalLink className="text-xl float-left" /></a></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default cardLeft;