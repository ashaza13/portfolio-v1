import React from "react";
import symbiota from "../static/symbiota.png";
import { FiGithub } from "react-icons/fi";


const cardLeft = ({ name, description, technologies, link }) => {
    return (
        <div className="wrap w-full mx-auto my-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="row-span-full col-start-1 col-span-7 self-center rounded-md transition duration-500 opacity-50 hover:opacity-100 z-0">
                    <a href="#"><img className="object-cover rounded-md drop-shadow-lg" src={symbiota} alt="" /></a>
                </div>
                <div className="row-span-full col-span-6 col-end-13 self-center p-1 text-right z-10">
                    <p className="text-orange-600 text-l">Featured Project</p>
                    <h1 className="text-xl mb-5"><a href="#" className="text-white font-bold transition duration-500 hover:text-orange-600">Symbiota</a></h1>
                    <p className="text-white bg-slate rounded-md py-2 px-2 text-right drop-shadow-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul className="flex flex-wrap text-lightGray my-4 justify-end">
                        <li className="px-4">
                            AWS Amplify
                        </li>
                        <li className="">
                            ReactJS
                        </li>
                    </ul>
                    <div className="text-white">
                        <a href="#" className="transition duration-500 hover:text-orange-600"><FiGithub className="text-xl float-right" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cardLeft;