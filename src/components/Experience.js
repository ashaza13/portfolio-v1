import React from "react";
import ashaz from "../static/ashaz.jpg";

const Experience = () => {
    return (
        <div className="flex justify-center py-28 sm:py-48 lg:py-56">
            <div className="max-w-lg text-left">
                <h1 className="text-white font-bold text-2xl">Where I've Worked</h1>
                <p className="text-white py-4">Id consequat do qui fugiat mollit excepteur proident. Aliquip cupidatat laborum fugiat est et consectetur cillum est id aute veniam ex enim. Tempor eu fugiat reprehenderit incididunt sint nostrud non.</p>
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
            <div className="">
                <img src={ashaz} alt="ashaz" className="my-5 w-60 rounded-md drop-shadow-lg transition hover:scale-110 " />
            </div>
        </div>
    )
};

export default Experience;