import React from "react";
import symbiota from "../static/symbiota.png";


const cardRight = ({ name, description, technologies, link }) => {
    return (
        <div className="wrap w-full mx-auto my-16">
            <div className="grid grid-cols-12 gap-4">
                <div className="row-span-full col-start-5 col-span-10 self-center">
                    <img className="object-cover rounded-lg" src={symbiota} alt="" />
                </div>
                <div className="row-span-full col-start-1 col-span-7 col-end-8 self-center p-1 text-left">
                    <p className="text-orange-600 text-l">Featured Project</p>
                    <a href="#"><h1 className="text-white font-bold text-xl my-1">Symbiota</h1></a>
                    <p className="text-white bg-slate rounded-lg py-2 px-2 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul className="flex flex-wrap items-center text-lightGray">
                        <li className="pr-4">
                            AWS Amplify
                        </li>
                        <li>
                            ReactJS
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default cardRight;