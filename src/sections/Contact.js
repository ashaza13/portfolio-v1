import React from "react";
import { useGlitch } from "react-powerglitch";

const Contact = () => {
    const glitchButton = useGlitch({ playMode: "hover" });

    return (
        <section id="contact">
                <div className="flex justify-center py-0 mx-4 lg:py-28">
                    <div className="max-w-5xl my-10 text-center">
                        <div className="flex justify-center items-center">
                            <p className="text-orange-600 font-bold text-2xl mr-2">04.</p>
                            <h1 className="mr-4 text-white font-bold text-2xl">Contact</h1>
                        </div>
                        <h1 className="text-white font-bold text-4xl py-4">Let's get in touch</h1>
                        <div className="block max-w-lg text-white">
                            <p>
                                I am actively searching for internship and full-time opportunities after my graduation in December 2023.
                            </p>
                        </div>
                        <a href="mailto: ahmed.ashaz9@gmail.com" target="_blank"><button ref={glitchButton.ref} className="bg-white drop-shadow-lg text-black center px-8 py-2 mt-8 transition hover:bg-black hover:text-white">Contact Me</button></a>
                    </div>
                </div>
        </section>
    );
};

export default Contact;