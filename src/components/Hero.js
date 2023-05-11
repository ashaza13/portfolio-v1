import React from "react";
import { useGlitch } from "react-powerglitch";


const Hero = () => {
    const glitch = useGlitch();

    return (
        <div className="flex justify-center py-32 sm:py-48 lg:py-56">
            <div className="max-w-lg text-center">
                <p className="text-white text-left py-2">Hi, my name is</p>
                <p ref={glitch.ref} className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-white text-7xl text-left">ASHAZ AHMED</p>
                <p className="text-white text-left py-2">I'm a Computer Science student at Virginia Polytechnic Institute and State University.</p>
                <button className="bg-white text-black center px-8 py-2 mt-8 transition hover:bg-black hover:text-white hover:drop-shadow-md hover:scale-125">View My Work</button>
            </div>
        </div>
    )
};

export default Hero;