import React, { useState } from "react";

const Experience = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className="flex justify-center py-32 sm:py-32 lg:py-32">
            <div className="max-w-lg my-10 text-left">
                <h1 className="text-white font-bold text-2xl">Where I've Worked</h1>
                <div>
                    <ul className="mt-6 text-lightGray">
                        <li className={openTab === 1 ? "justify-center border-l-2 px-2 py-4 transition duration-500 text-orange-600 bg-slate border-orange-600" : "justify-center border-l-2 px-2 py-4 transition duration-500 hover:bg-slate"}>
                            <a href="#" className="transition duration-500 hover:text-orange-600" onClick={e => { e.preventDefault(); setOpenTab(1);}}>GDIT</a>
                        </li>
                        <li className={openTab === 2 ? "justify-center border-l-2 px-2 py-4 transition duration-500 text-orange-600 bg-slate border-orange-600" : "justify-center border-l-2 px-2 py-4 transition duration-500 hover:bg-slate"}>
                            <a href="#" className="transition duration-500 hover:text-orange-600" onClick={e => { e.preventDefault(); setOpenTab(2);}}>HEVT</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={openTab === 1 ? "transition block max-w-lg my-24 mx-4" : "transition hidden"}>
                <h1 className="text-white font-bold text-xl">Software Developer Associate</h1>
                <h2 className="text-lg py-2 text-lightGray">June 2022 - Present</h2>
                <p className="py-2 text-white">Eu adipisicing veniam sint ex. Esse sit laboris magna id sunt anim sit incididunt consectetur est. Eu irure nulla labore dolor. Consequat aute tempor ullamco commodo dolor enim dolore proident duis tempor irure exercitation velit. Proident officia magna pariatur eu nisi quis sint est amet laborum nisi eiusmod. Non reprehenderit est aute consectetur ex esse consequat amet quis.</p>
            </div>
            <div className={openTab === 2 ? "transition block max-w-lg my-24 mx-4" : "transition hidden"}>
                <h1 className="text-white font-bold text-xl">Undergraduate Researcher</h1>
                <h2 className="text-lg py-2 text-lightGray">January 2023 - Present</h2>
                <ul className="py-2 list-disc list-inside text-white">
                    <li className="py-1">
                        Voluptate ipsum minim veniam pariatur anim nisi ex tempor velit veniam ut ea.
                    </li>
                    <li className="py-1">
                        Voluptate ipsum minim veniam pariatur anim nisi ex tempor velit veniam ut ea.
                    </li>
                    <li className="py-1">
                        Voluptate ipsum minim veniam pariatur anim nisi ex tempor velit veniam ut ea.
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Experience;