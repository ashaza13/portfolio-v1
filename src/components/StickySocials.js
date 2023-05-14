import React from "react";
import { FiGithub, FiCamera, FiLinkedin } from "react-icons/fi";
const StickySocials = () => {

    return (
        <div className="sticky bottom-0 text-white animate-fadeIn">
            <div className="pl-16 pb-16">
                <ul className="text-xl">
                    <li className="py-4">
                        <FiGithub className="transition duration-500 hover:text-orange-600 hover:-translate-y-2"/>
                    </li>
                    <li className="py-4">
                        <FiCamera className="transition duration-500 hover:text-orange-600 hover:-translate-y-2" />
                    </li>
                    <li className="py-4">
                        <FiLinkedin className="transition duration-500 hover:text-orange-600 hover:-translate-y-2" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default StickySocials;