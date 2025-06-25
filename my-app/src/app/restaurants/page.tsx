import React from "react";
import Title, { TitleType } from "../components/shared/Title";
import RestaurantCard from "./RestaurantCard";

function RestaurantPage() {
    return (
        <div>
            <Title type={TitleType.subTitle}>Popular Restaurants</Title>
            <div>
                <RestaurantCard />
            </div>
        </div>
    );
}

export default RestaurantPage;
