import React from "react";
import Title from "./Title";
import Search from "./Search";

function SearchSection() {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
            <div className="w-1/2">
                <Title />
                <Search />
            </div>
        </section>
    );
}

export default SearchSection;
