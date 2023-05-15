import React from "react";
import ashaz from "../static/ashaz.jpg";

const About = () => {
    // const targets = document.querySelectorAll(".js-show-on-scroll");

    // // Callback for IntersectionObserver
    // const callback = function (entries) {
    //     entries.forEach(entry => {

    //         // Is the element in the viewport?
    //         if (entry.isIntersecting) {
    //             // Add the fadeIn class:
    //             entry.target.classList.add("animate-fadeIn");
    //         } else {
    //             entry.target.classList.remove("animate-fadeIn");
    //         }
    //     });
    // };

    // // Set up a new observer
    // const observer = new IntersectionObserver(callback);

    // // Loop through each of the target
    // targets.forEach(function (target) {

    //     // Add the element to the watcher
    //     observer.observe(target);
    // });

    return (
        <section id="about">
            <div className="flex justify-center py-28 sm:py-28 lg:py-28">
                <div className="max-w-lg text-left">
                    <div className="relative flex items-center">
                        <p className="text-orange-600 font-bold text-2xl mr-2">01.</p>
                        <h1 className="mr-4 text-white font-bold text-2xl">About Me</h1>
                        <div className="max-w-sm flex-grow border-t-2 border-slate"></div>
                    </div>
                    <p className="text-white pt-4">Hello! I am currently a student at Virginia Polytechnic Institute and State University pursuing my undergraduate degree in Computer Science. My interest in Computer Science started as child when I was exposed to Wordpress and created a website for a science fair.</p>
                    <p className="text-white py-4">I am very passionate about Computer Science. I have worked on and continue to work on many projects to expand my knowledge. Recently, I joined the <a href="https://eng.vt.edu/academics/student-teams/hevt.html" target="_blank" className="group text-orange-600 transition duration-300">Hokie Electric Vehicle Team<span className="inline-block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600"></span></a> creating MATLAB simulations utilizing machine learning tools such as TensorFlow.</p>
                    <ul className="columns-2 list-disc list-inside py-4 text-white">
                        <li className="text-white">
                            Java
                        </li>
                        <li className="text-white">
                            Python
                        </li>
                        <li className="text-white">
                            JavaScript
                        </li>
                        <li className="text-white">
                            ReactJS
                        </li>
                        <li className="text-white">
                            AWS Amplify
                        </li>
                        <li className="text-white">
                            Flask
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={ashaz} alt="ashaz" className="my-10 ml-6 w-72 rounded-md drop-shadow-lg transition hover:-translate-x-2 hover:-translate-y-2" />
                </div>
            </div>
        </section>
    )
};

export default About;