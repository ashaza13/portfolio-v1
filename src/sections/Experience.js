import React, { useState } from "react";
import Fade from 'react-reveal/Fade';

const Experience = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <section id="experience">
            <Fade bottom >
                <div className="flex flex-col md:flex-row justify-center mx-4 py-20 lg:py-28">
                    <div className="max-w-lg my-10 text-left">
                        <div className="relative flex items-center">
                            <p className="text-orange-600 font-bold text-2xl mr-2">02. </p>
                            <h1 className="mr-4 text-white font-bold text-2xl">Where I've Worked</h1>
                            <div className="max-w-sm flex-grow border-t-2 border-slate"></div>
                        </div>
                        <div>
                            <ul className="mt-6 text-lightGray">
                                <li className={openTab === 1 ? "justify-center border-l-2 px-2 py-4 transition duration-500 text-orange-600 bg-slate border-orange-600" : "justify-center border-l-2 px-2 py-4 transition duration-500 hover:bg-slate"}>
                                    <a href="#" className="transition duration-500 hover:text-orange-600" onClick={e => { e.preventDefault(); setOpenTab(1); }}>GDIT</a>
                                </li>
                                <li className={openTab === 2 ? "justify-center border-l-2 px-2 py-4 transition duration-500 text-orange-600 bg-slate border-orange-600" : "justify-center border-l-2 px-2 py-4 transition duration-500 hover:bg-slate"}>
                                    <a href="#" className="transition duration-500 hover:text-orange-600" onClick={e => { e.preventDefault(); setOpenTab(2); }}>HEVT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={openTab === 1 ? "transition block max-w-lg md:mt-24 mx-4" : "transition hidden"}>
                        <h1 className="text-white font-bold text-xl">Software Developer Associate</h1>
                        <h2 className="text-lg py-2 text-lightGray">June 2022 - Present</h2>
                        <ul className="py-2 list-disc list-inside text-white">
                            <li className="py-1">
                                Worked on the ISEE contract with the DIA concerning development of infrastructure as well as identity, credential, and access management (ICAM)
                            </li>
                            <li className="py-1">
                                Collaborated and led a team of 3 software developer interns to write and document PowerShell scripts to automate the migration of thousands of over-seas Department of Defense employees MS Exchange email accounts
                            </li>
                            <li className="py-1">
                                Communicated and regularly presented progress directly with managers and project overseers within the company
                            </li>
                        </ul>
                    </div>
                    <div className={openTab === 2 ? "transition block max-w-lg md:mt-24 mx-4" : "transition hidden"}>
                        <h1 className="text-white font-bold text-xl">Undergraduate Researcher</h1>
                        <h2 className="text-lg py-2 text-lightGray">January 2023 - Present</h2>
                        <ul className="py-2 list-disc list-inside text-white">
                            <li className="py-1">
                                Conducting research for the electric vehicle EcoCar 4-year design competition sponsored by General Electric
                            </li>
                            <li className="py-1">
                                Designing and researching different connected and automated vehicle systems (CAVs) for the Cadillac Lyric to improve overall energy efficiency
                            </li>
                            <li className="py-1">
                                Working with tools and languages such as Python, Sensor Fusion, Simulink, and MATLAB
                            </li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </section>
    )
};

export default Experience;