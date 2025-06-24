import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import RestaurantsPage from "./restaurants/page";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <RestaurantsPage />
        </>
    );
}
