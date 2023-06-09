import React from "react";
import { useGlitch } from "react-powerglitch";


const Hero = () => {
    const glitch = useGlitch({ glitchTimeSpan: { "start": 0.7, "end": 0.9 }, timing: { "duration": 3450 } });
    const glitchButton = useGlitch({ playMode: "hover" });

    return (

        <div className="flex justify-center mx-16 py-44 md:py-60">
            <div className="max-w-lg text-center">
                <p className="text-white text-left py-2 animate-fadeInUp">Hi, my name is</p>
                <p ref={glitch.ref} className="text-4xl border-r-4 border-r-white animate-typing overflow-hidden whitespace-nowrap text-white md:text-7xl text-left">ASHAZ AHMED</p>
                <p className="text-left text-lightGray text-3xl py-2 animate-fadeIn">I like to make things</p>
                <p className="text-white text-left py-2 animate-fadeIn">I'm a Computer Science student at Virginia Polytechnic Institute and State University.</p>
                <a href="https://github.com/ashaza13" target="_blank"><button ref={glitchButton.ref} className="bg-white text-black drop-shadow-lg center px-8 py-2 mt-8 transition hover:bg-black hover:text-white">View My Work</button></a>
            </div>
        </div>
    )
};

export default Hero;