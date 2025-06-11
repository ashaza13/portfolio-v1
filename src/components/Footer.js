import React from "react";
import { GoMarkGithub } from "react-icons/go";
import StickySocials from "./StickySocials";

const Footer = () => {
    return (
        <footer className="relative flex justify-center items-center z-0 py-6 sm:py-8 px-4">
            <StickySocials />
            <div className="max-w-lg my-4 sm:my-8 text-center m-auto">
                <a 
                    href="https://github.com/ashaza13/portfolio-v1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-center transition duration-500 text-lightGray font-bold text-xs sm:text-sm hover:text-orange-600 flex items-center justify-center gap-2"
                >
                    Designed & Built by Ashaz Ahmed 
                    <GoMarkGithub className="text-sm sm:text-base" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;