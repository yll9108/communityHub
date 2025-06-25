import { Utensils, Home, Briefcase, Info } from "lucide-react";

export const menuItems = ["Restaurant", "Housing", "Tips", "Communtiy"];

export const categories = [
    { icon: Utensils, title: "Restaurants", content: "testssss" },
    { icon: Home, title: "Housing", content: "testssss" },
    { icon: Briefcase, title: "Jobs", content: "testssss" },
    { icon: Info, title: "Community", content: "testssss" },
];

export const restaurantsItems = [
    {
        id: 1,
        cost: "$$",
        title: "Taiwanese Restaurant",
        category: "Taiwanese",
        rating: 4,
        location: "Downtown",
    },
    {
        id: 2,
        cost: "$",
        title: "Indian Restaurant",
        category: "Indian",
        rating: 4.2,
        location: "Surrey",
    },
];
