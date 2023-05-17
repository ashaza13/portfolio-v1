import React from "react";
import chase from "../static/images/chase.png";
import { FiGithub } from "react-icons/fi";


const cardRight = ({ name, description, technologies, link }) => {
    return (
        <div className="wrap w-full mx-auto mb-12 md:my-28">
            <div className="md:grid md:grid-cols-12 md:gap-4">
                <div className="row-span-full col-start-5 col-span-10 self-center rounded-md transition duration-500 opacity-50 hover:opacity-100 z-0">
                    <a href={link} target="_blank"><img className="aspect-square md:aspect-auto object-cover rounded-md drop-shadow-lg" src={chase} alt="" /></a>
                </div>
                <div className="row-span-full col-start-1 col-span-6 self-center p-1 text-left z-10">
                    <p className="text-orange-600 text-l">Featured Project</p>
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
                        <a href="#" className="transition duration-500 hover:text-orange-600"><FiGithub className="text-xl float-left" /></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default cardRight;