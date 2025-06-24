import React from "react";
import Title from "./Title";
import Search from "./Search";
import Card from "../shared/Card";

function Hero() {
    return (
        <>
            <section className="hero bg-gradient-to-br from-blue-50 to-indigo-100 min-h-2/3">
                <div className="hero-content text-center">
                    <div className="max-w-3/4">
                        <Title />
                        <Search />
                    </div>
                </div>
            </section>
            <section className="flex">
                <Card />
            </section>
        </>
    );
}

export default Hero;
