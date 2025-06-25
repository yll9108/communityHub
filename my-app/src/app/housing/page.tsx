import React from "react";
import { housingItems } from "../components/shared/mockData";
import BaseCard from "../components/shared/BaseCard";
import Title, { TitleType } from "../components/shared/Title";

function HousingPage() {
    return (
        <>
            <Title type={TitleType.subTitle}>Available Housing</Title>
            <div className="flex flex-wrap justify-center">
                {housingItems.map((housing, index) => (
                    <BaseCard key={index} {...housing} />
                ))}
            </div>
        </>
    );
}

export default HousingPage;
