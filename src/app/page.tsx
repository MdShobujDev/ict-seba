import AboutHostingSolutions from "@/components/HomePage/AboutHostingSolutions";
import Banner from "@/components/HomePage/Banner";
import CategoryCards from "@/components/HomePage/CategoryCards";
import DomainSearch from "@/components/HomePage/DomainSearch";
import HeroCarousel from "@/components/HomePage/HeroCarousel";
import Reviews from "@/components/HomePage/Reviews";
import ServicesTab from "@/components/HomePage/ServicesTab";
import WebHostingCollapse from "@/components/HomePage/WebHostingCollapse";
// import Card from "@/components/PricingCard/Card";

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <HeroCarousel />
      <ServicesTab />
      <CategoryCards />
      <Banner />
      <AboutHostingSolutions />
      <DomainSearch />
      <Reviews />
      <WebHostingCollapse />
    </div>
  );
}
