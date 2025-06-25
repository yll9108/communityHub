import React from "react";
import { categories } from "./menuItems";

function Card() {
    return (
        <>
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <div
                        key={category.title}
                        className="group card bg-base-100 w-48 sm:w-72 shadow-sm mt-8 mr-6 hover:scale-105 transition-transform"
                    >
                        <figure className="px-10 pt-10">
                            <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        </figure>
                        <div className="card-body items-center text-center group-hover:scale-110 transition-transform">
                            <h2 className="card-title">{category.title}</h2>
                            <p>{category.content}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Card;
