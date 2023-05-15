import React from "react";
import { FiGithub, FiCamera, FiLinkedin } from "react-icons/fi";
const StickySocials = () => {

    return (
        <div className="invisible fixed bottom-0 left-20 text-white animate-fadeIn lg:visible">
            <ul className="flex flex-col text-xl">
                <li className="pb-6">
                    <a href="#" target="_blank"><FiGithub className="transition duration-500 hover:text-orange-600 hover:-translate-y-2" /></a>
                </li>
                <li className="pb-6">
                    <a href="#" target="_blank"><FiCamera className="transition duration-500 hover:text-orange-600 hover:-translate-y-2" /></a>
                </li>
                <li className="mb-20">
                    <a href="#" target="_blank"><FiLinkedin className="transition duration-500 hover:text-orange-600 hover:-translate-y-2" /></a>
                </li>
            </ul>
        </div>
    );
};

export default StickySocials;