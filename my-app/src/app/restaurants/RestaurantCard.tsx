import React from "react";
import BaseCard from "../components/shared/BaseCard";
import { restaurantsItems } from "../components/shared/mockData";

function RestaurantCard() {
    return (
        <div className="flex flex-wrap justify-center">
            {restaurantsItems.map((restaurant, index) => (
                <BaseCard
                    key={index}
                    // title={restaurant.title}
                    // cost={restaurant.cost}
                    // category={restaurant.category}
                    // rating={restaurant.rating}
                    // location={restaurant.location}
                    {...restaurant}
                />
            ))}
        </div>
    );
}

export default RestaurantCard;
