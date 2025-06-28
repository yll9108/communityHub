import CommunityPage from "./community/page";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import HousingPage from "./housing/page";
import JobPage from "./jobs/page";
import RestaurantPage from "./restaurants/page";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <RestaurantPage />
            <HousingPage />
            <JobPage />
            <CommunityPage />
        </>
    );
}
