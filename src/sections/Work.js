import React from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Card from "../components/Card";


const Work = () => {
    return (
        <section id="work">
            <div className="flex justify-center py-12 mx-4 lg:py-28">
                <div className="max-w-5xl my-10 text-left">
                    <div className="relative flex items-center pb-5">
                        <p className="text-orange-600 font-bold text-2xl mr-2">03. </p>
                        <h1 className="mr-4 text-white font-bold text-2xl"> Projects</h1>
                        <div className="max-w-sm flex-grow border-t-2 border-slate"></div>
                    </div>
                    <div className="hidden md:block">
                        <CardLeft />
                        <CardRight />
                        <CardLeft />
                    </div>
                    <div className="visible md:hidden">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;