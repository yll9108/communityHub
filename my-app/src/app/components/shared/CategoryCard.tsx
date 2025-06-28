import React, { ReactNode } from "react";

export type CategoryType = {
    icon: ReactNode;
    title: string;
    content: string;
};

// export type CommunityType = {
//     icon: ReactNode;
//     title: ReactNode;
//     content: ReactNode;
// };

function CategoryCard(props: CategoryType) {
    return (
        <>
            {/* {categories.map((category, index) => {
                return ( */}
            <div className="group card bg-base-100 w-48 sm:w-72 shadow-sm mt-8 mr-6 hover:scale-105 transition-transform">
                <figure className="px-10 pt-10">
                    {props.icon}
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg> */}
                    {/* <svg className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" /> */}
                </figure>
                <div className="card-body items-center text-center group-hover:scale-110 transition-transform">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
            {/* );
            })} */}
        </>
    );
}

export default CategoryCard;
