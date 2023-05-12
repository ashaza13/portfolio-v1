import React from "react";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
    return (
        <footer className="flex justify-center py-4 sm:py-4 lg:py-4">
            <div className="max-w-lg my-10 text-center">
                <a href="https://github.com/ashaza13/portfolio-v1" className="text-center transition duration-500 text-lightGray font-bold text-xs hover:text-orange-600">Designed & Built by Ashaz Ahmed <GoMarkGithub/></a>
            </div>

        </footer>
    );
};

export default Footer;