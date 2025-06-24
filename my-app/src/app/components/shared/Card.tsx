import { Utensils } from "lucide-react";
import React from "react";
import { categories } from "./menuItems";

function Card() {
    return (
        <>
            {categories.map((category) => (
                <div
                    key={category.title}
                    className="card bg-base-100 w-96 shadow-sm"
                >
                    <figure className="px-10 pt-10">
                        <Utensils className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{category.title}</h2>
                        <p>{category.content}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;
