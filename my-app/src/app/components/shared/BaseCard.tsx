import React, { ReactNode } from "react";

export type BaseCardType = {
    imageUrl: string;
    title: ReactNode;
    body: ReactNode;
};

const BaseCard = (props: BaseCardType) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{props.body}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default BaseCard;
