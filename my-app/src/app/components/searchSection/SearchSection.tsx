import React from "react";
import Title from "./Title";
import Search from "./Search";

function SearchSection() {
    return (
        <section className="hero bg-gradient-to-br from-blue-50 to-indigo-100 min-h-2/3">
            <div className="hero-content text-center">
                <div className="max-w-3/4">
                    <Title />
                    <Search />
                </div>
            </div>
        </section>
    );
}

export default SearchSection;
