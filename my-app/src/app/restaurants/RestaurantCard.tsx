import React from "react";
import BaseCard from "../components/shared/BaseCard";
import { restaurantsItems } from "../components/shared/mockData";

function RestaurantCard() {
    return (
        <div className="flex">
            {restaurantsItems.map((restaurant) => (
                <BaseCard
                    key={restaurant.id}
                    title={restaurant.title}
                    cost={restaurant.cost}
                    category={restaurant.category}
                    rating={restaurant.rating}
                    location={restaurant.location}
                />
            ))}
        </div>
    );
}

export default RestaurantCard;
