import React from "react";
import { GoMarkGithub } from "react-icons/go";
import StickySocials from "./StickySocials";

const Footer = () => {
    return (

        <footer className="relative flex justify-center items-center z-0">
            <StickySocials />
            <div className=" max-w-lg my-8 text-center m-auto">
                <a href="https://github.com/ashaza13/portfolio-v1" target="_blank" className="text-center transition duration-500 text-lightGray font-bold text-xs hover:text-orange-600">Designed & Built by Ashaz Ahmed <GoMarkGithub className="mx-auto" /></a>
            </div>
        </footer>
    );
};

export default Footer;