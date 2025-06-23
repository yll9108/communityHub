import React from "react";

function Search() {
    return (
        <div>
            <label className="input rounded-4xl">
                <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="text" className="grow" placeholder="search" />
                <button className="btn badge badge-neutral badge-m rounded-4xl">
                    Optional
                </button>
            </label>
        </div>
    );
}

export default Search;
