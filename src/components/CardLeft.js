import React from "react";
import symbiota from "../static/images/symbiota.png";
import { FiGithub } from "react-icons/fi";


const cardLeft = ({ name, description, technologies, link }) => {
    return (
        <div className="wrap w-full mx-auto my-8 md:my-12">
            <div className="md:grid md:grid-cols-12 md:gap-4">
                <div className="md:row-span-full md:col-start-1 md:col-span-7 md:self-center md:rounded-md md:transition md:duration-500 opacity-50 md:hover:opacity-100 md:z-0 md:flex">
                    <a href={link} target="_blank"><img className="aspect-square md:aspect-auto object-cover rounded-md drop-shadow-lg" src={symbiota} alt="" /></a>
                </div>
                <div className="row-span-full col-span-6 col-end-13 self-center p-1 md:text-right z-10">
                    <p className="text-orange-600 text-l">Featured Project</p>
                    <h1 className="text-xl mb-5"><a href="#" className="text-white font-bold transition duration-500 hover:text-orange-600">{name}</a></h1>
                    <p className="text-white bg-slate rounded-md py-2 px-2 md:text-right drop-shadow-lg">{description}</p>
                    <ul className="flex flex-wrap text-lightGray my-4 md:justify-end">
                        {technologies.map((technology, i) => (
                            <li key={i} className="md:pl-4">
                                {technology}
                            </li>
                        ))}
                    </ul>
                    <div className="text-white">
                        <a href={link} target="_blank" className="transition duration-500 hover:text-orange-600"><FiGithub className="text-xl md:float-right" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cardLeft;