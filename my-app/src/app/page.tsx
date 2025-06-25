import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import RestaurantPage from "./restaurants/page";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <RestaurantPage />
        </>
    );
}
