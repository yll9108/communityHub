import React from "react";
import Title from "./Title";
import Search from "./Search";
import Card from "../shared/Card";

function Hero() {
    return (
        <>
            <div className="h-screen">
                <section className="hero bg-gradient-to-br from-blue-50 to-indigo-100 h-96">
                    <div className="hero-content text-center">
                        <div className="max-w-3/4">
                            <Title />
                            <Search />
                        </div>
                    </div>
                </section>
                <section className="flex justify-center">
                    <Card />
                </section>
            </div>
        </>
    );
}

export default Hero;
