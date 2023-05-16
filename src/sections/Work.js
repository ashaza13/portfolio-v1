import React from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";


const Work = () => {
    return (
        <section id="work">
            <div className="flex justify-center py-12 mx-4 lg:py-28">
                <div className="max-w-5xl my-10 text-left">
                    <div className="relative flex items-center">
                        <p className="text-orange-600 font-bold text-2xl mr-2">03. </p>
                        <h1 className="mr-4 text-white font-bold text-2xl"> Projects</h1>
                        <div className="max-w-sm flex-grow border-t-2 border-slate"></div>
                    </div>
                    <CardLeft />
                    <CardRight />
                    <CardLeft />
                </div>
            </div>
        </section>
    );
};

export default Work;