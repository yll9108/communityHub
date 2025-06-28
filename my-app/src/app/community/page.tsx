import React from "react";
import Title, { TitleType } from "../components/shared/Title";
import CategoryCard from "../components/shared/CategoryCard";
import { CommunityCategory } from "../components/shared/mockData";

function CommunityPage() {
    return (
        <>
            <Title type={TitleType.subTitle}>Community</Title>
            {/* <section className="flex justify-center"> */}
            <div className="flex flex-wrap justify-center">
                {CommunityCategory.map((community, index) => (
                    <CategoryCard key={index} {...community} />
                ))}
            </div>
            {/* </section> */}
        </>
    );
}

export default CommunityPage;
