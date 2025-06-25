import { Star } from "lucide-react";
import React, { ReactNode } from "react";

export type BaseCardType = {
    imageUrl: string;
    title: ReactNode;
    // body: ReactNode;
    category: ReactNode;
    rating: ReactNode;
    cost: ReactNode;
    location: ReactNode;
};

const BaseCard = (props: BaseCardType) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm relative mr-6">
            <figure>
                <img
                    src="https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_237882754.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="badge badge-secondary absolute top-2 right-2">
                {props.cost}
            </div>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                {/* <p>{props.body}</p> */}
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{props.category}</div>
                    <div className="flex">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <div>{props.rating}</div>
                    </div>
                </div>
                <div>{props.location}</div>
            </div>
        </div>
    );
};

export default BaseCard;
