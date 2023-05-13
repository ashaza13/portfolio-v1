import React from "react";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";


const Work = () => {
    return (
        <section id="work">
            <div className="flex justify-center py-32 sm:py-32 lg:py-32">
                <div className="max-w-lg my-10 text-left">
                    <h1 className="text-white font-bold text-2xl">Projects</h1>
                    <CardLeft />
                    <CardRight />
                </div>
            </div>
        </section>
    );
};

export default Work;