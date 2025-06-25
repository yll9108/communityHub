import React from "react";
import Title, { TitleType } from "../components/shared/Title";

function RestaurantPage() {
    return (
        <div>
            <Title type={TitleType.subTitle}>Popular Restaurants</Title>
        </div>
    );
}

export default RestaurantPage;
