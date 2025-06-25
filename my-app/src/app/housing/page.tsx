import React from "react";
import { housingItems } from "../components/shared/mockData";
import BaseCard from "../components/shared/BaseCard";

function HousingPage() {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {housingItems.map((housing, index) => (
                    <BaseCard key={index} {...housing} />
                ))}
            </div>
        </>
    );
}

export default HousingPage;
