import React from "react";
import { ReactDOM } from "react";


function Card({ imageUrl, title, description, link }) {
    console.log("url" + imageUrl);
    return (
        <a href="#">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={link}>
                    <img className="rounded-t-lg" src={imageUrl} alt="" />
                </a>
                <div className="p-5">
                    <a href={link}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#98AA8A8] dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}.</p>
                </div>
            </div>
        </a>
    );
}

export default Card;