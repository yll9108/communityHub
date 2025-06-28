import React from "react";
import Title, { TitleType } from "../shared/Title";
import Search from "./Search";
import CategoryCard from "../shared/CategoryCard";
import { categories } from "../shared/mockData";

function Hero() {
    return (
        <>
            <div>
                <section className="hero bg-gradient-to-br from-blue-50 to-indigo-100 h-96">
                    <div className="hero-content text-center">
                        <div className="max-w-3/4">
                            <Title type={TitleType.mainTitle}>
                                Your Local Taiwanese Community Hub
                            </Title>
                            <p className="py-6">
                                Discover restaurants, find housing, explore job
                                opportunities, and stay connected with your
                                community
                            </p>
                            <Search />
                        </div>
                    </div>
                </section>
                {/* <section> */}
                <div className="flex flex-wrap justify-center">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>
                {/* </section> */}
            </div>
        </>
    );
}

export default Hero;
